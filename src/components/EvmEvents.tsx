import {Components, graphql, hooks, utils as reefUtils,} from '@reef-defi/react-lib';
import {ApolloClient, gql, SubscriptionOptions} from "@apollo/client";
import {ethers} from 'ethers';
import {from, map, Observable, scan, switchMap} from "rxjs";
import {useEffect, useRef, useState} from "react";


const {
    isDataSet,
    getData,
    DataProgress,
} = reefUtils;

const {
    Loading, TransferComponent,
} = Components;

interface EvmFilter {
    address: string;
    topics?: any[]
}

function toGQLAddressTopicsObj(filter: EvmFilter): {address: string, topic0:any,topic1:any,topic2:any,topic3:any} {
    let topics: any = [null,null,null,null];
    if (filter.topics) {
        topics.splice(0, filter.topics.length, ...filter.topics);
    }
    topics = topics.map((filterTopic: any, index:number) => {
        if (!filterTopic) {
            return {};
        }
        if (Array.isArray(filterTopic)) {
            return {_in: filterTopic};
        }
        return {_eq: filterTopic};
    }).reduce((state:any, curr:any, i:number) => {
        state['topic' + i] = curr;
        return state;
    }, {});
    return {address: filter.address?{_eq:filter.address}:{}, ...topics}
}

const getGqlContractEventsQuery = (
    filter: EvmFilter,
    fromBlockId?: number,
    toBlockId?: number,
): SubscriptionOptions => {
    const EVM_EVENT_GQL = gql`
    query evmEvent(
      $address: String_comparison_exp!
      $blockId: bigint_comparison_exp!
      $topic0: String_comparison_exp
      $topic1: String_comparison_exp
      $topic2: String_comparison_exp
      $topic3: String_comparison_exp
    ) {
      evm_event(
        order_by: [
          { block_id: desc }
          { extrinsic_index: desc }
          { event_index: desc }
        ]
        where: {
          _and: [
            { contract_address: $address }
            { topic_0: $topic0 }
            { topic_1: $topic1 }
            { topic_2: $topic2 }
            { topic_3: $topic3 }
            { method: { _eq: "Log" } }
            { block_id: $blockId }
          ]
        }
      ) {
        contract_address
        data_parsed
        data_raw
        topic_0
        topic_1
        topic_2
        topic_3
        block_id
        extrinsic_index
        event_index
      }
    }
  `;
    return {
        query: EVM_EVENT_GQL,
        variables: {
            ...toGQLAddressTopicsObj(filter),
            blockId: toBlockId ? {_gte: fromBlockId, _lte: toBlockId} : {_eq: fromBlockId},
        },
        fetchPolicy: 'network-only',
    };
};

const toEvmEventFilter = (contractAddress: string, methodSignature?: string, topicsFilter: any[] = []): EvmFilter=>{
    if (topicsFilter && topicsFilter.length > 3) {
        console.warn('toEvmEventFilter too many topics =',topicsFilter)
    }
    return {address: contractAddress, topics: [methodSignature?ethers.utils.keccak256(ethers.utils.toUtf8Bytes(methodSignature)) : null, ...topicsFilter]};
}

const getGqlLastFinalizedBlock = (): SubscriptionOptions => {
    const FINALISED_BLOCK_GQL = gql`
    subscription finalisedBlock {
      block(order_by: {id: desc}, limit: 1, where: {finalized: {_eq: true}}) {
        id
      }
    }
  `;
    return {
        query: FINALISED_BLOCK_GQL,
        variables: {},
        fetchPolicy: 'network-only',
    };
};

function getEvmEvents$(apolloClient: ApolloClient<any>, contractAddress: string, methodSignature?: string, fromBlockId?: number, toBlockId?: number): Observable<any> {
    if (!fromBlockId) {
        return graphql.zenToRx(apolloClient.subscribe(getGqlLastFinalizedBlock())).pipe(
            scan((state, res: any) => {
                const block = res?.data?.block?.length ? res.data.block[0] : null;
                if (!block) {
                    console.warn("NO FINALISED BLOCK RESULT",res);
                    return state;
                }
                let newBlockId = block.id;
                const diff = state.prevBlockId ? newBlockId - state.prevBlockId : 1;
                let fromBlockId = newBlockId;
                let toBlockId = undefined;
                if (diff > 1 && state.prevBlockId) {
                    toBlockId = newBlockId;
                    fromBlockId = state.prevBlockId + 1;
                }
                return {prevBlockId: newBlockId, fromBlockId, toBlockId};
            }, {prevBlockId: undefined, fromBlockId: undefined, toBlockId: undefined}),
            switchMap((res: { fromBlockId: number, toBlockId: number | undefined }) => {
                return from(apolloClient?.query(
                    getGqlContractEventsQuery(toEvmEventFilter(contractAddress, methodSignature), res.fromBlockId, res.toBlockId),
                )).pipe(
                    map((events) => ({
                        fromBlockId: res.fromBlockId,
                        toBlockId: res.toBlockId || res.fromBlockId,
                        evmEvents: events.data.evm_event
                    }))
                );
            })
        ) as Observable<any>;
    }
    return from(apolloClient?.query(
        getGqlContractEventsQuery(toEvmEventFilter(contractAddress, methodSignature), fromBlockId, toBlockId),
    ))
}

interface EvmEventDefinition { eventName: string; paramNames: string[]; topic0Unencoded: string; paramsIndexed: boolean[]; };
const toEvmEventMemberDefinition = (eventAbiDef:string): EvmEventDefinition | null => {
    let startDefStr = 'event ';
    if(!eventAbiDef.startsWith(startDefStr)){
        return null;
    }
    let strippedDef = eventAbiDef
        .trim()
        .substring(0, startDefStr.length);
    let paramsStart = strippedDef.indexOf('(')+1;
    let paramsEnd = strippedDef.indexOf(')', paramsStart);
    const eventName = strippedDef.substring(0, paramsStart-1);
    const paramsRaw = strippedDef.substring(paramsStart, paramsEnd);
    const paramsSplit = paramsRaw.split(',')
    const paramNames = paramsSplit.map(param => param.split(' ')[0]);
    const paramsIndexed = paramsSplit.map(param => param.indexOf('indexed') > -1);
    const topic0Unencoded = eventName + '(' + paramNames.join(',') + ')';
    // const topic0Encoded = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(topic0Unencoded));
    return {eventName, paramNames, topic0Unencoded, paramsIndexed}
}

type EventFilterGeneratorFn = (...topicFilters: any[])=>EvmFilter;

const createEventDefFilterGenerator=(contractAddress: string, evDefinition: EvmEventDefinition): EventFilterGeneratorFn =>{
    return (...topicFilters: any[]): EvmFilter => toEvmEventFilter(contractAddress, evDefinition.topic0Unencoded, topicFilters);
}

const createContractFiltersInstance = (contractAddress: string, abi:string[]): any =>{
    const eventDefs: (EvmEventDefinition|null)[] = abi.filter(abiEl => abiEl.trim().startsWith('event'))
        .map(toEvmEventMemberDefinition);
    const filters: any = {}
    eventDefs.forEach((evDef: EvmEventDefinition|null) => {
        if(!evDef){
            return;
        }
        filters[evDef.eventName] = createEventDefFilterGenerator(contractAddress, evDef);
    });
    return filters;
}

export const EvmEvents = (): JSX.Element => {
    const apolloClient: ApolloClient<any> | undefined = hooks.useObservableState(graphql.apolloClientInstance$);
    const [lastEvents, setLastEvents] = useState<any>();
    const [contractAddress, setContractAddress] = useState('');
    const customEventSubs = useRef<any>();
    const libEventSubs = useRef<any>();

    useEffect(() => {
        // custom graphQL example

        async function fn() {
            if (!apolloClient) {
                return;
            }
            const methodSignature = 'Transfer(address,address,uint256)'
            customEventSubs.current?.unsubscribe();
            let fromBlockId = 0;
            customEventSubs.current = getEvmEvents$(apolloClient, contractAddress, methodSignature, fromBlockId).subscribe((val: any) => {
                console.log("EVM EVENTS=", val);
                setLastEvents(val)
            });
        };
        fn();
        return () => {
            customEventSubs.current?.unsubscribe();
        }
    }, [apolloClient, contractAddress]);

    useEffect(() => {
          // reef library example
          // const methodSignature = 'Transfer(address,address,uint256)'
          libEventSubs.current?.unsubscribe();
          libEventSubs.current = graphql.getEvmEvents$(contractAddress).subscribe((evmEvents: any) => {
            console.log("OBS EVM EV=", evmEvents);
          });

          return ()=>{
            libEventSubs.current?.unsubscribe();
          }
        }, [contractAddress]);

    return (
        <>
            <h5>EvmEvents.tsx component</h5>
            <div>
                contract address:<input value={contractAddress}
                                        onChange={({target: {value}}) => setContractAddress(value)}/>
            </div>

            <div>
            {!lastEvents && <span>No event to display</span>}
            {lastEvents && <>
                <div>block id: {lastEvents.fromBlockId}</div>
                <div>events len: {lastEvents.evmEvents.length}</div>
            </>}

            </div>
        </>
    );
};
