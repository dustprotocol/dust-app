import {Components, graphql, hooks, ReefSigner, utils as reefUtils, appState} from '@reef-defi/react-lib';
import {ApolloClient, gql, SubscriptionOptions} from "@apollo/client";
import {Contract, ethers, Signer as EthersSigner} from 'ethers';
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

interface EventFilter {
    address: string;
    topics?: any[]
}

interface Filter extends EventFilter{
    fromBlock: number;
    toBlock: number;
}

interface FilterByBlockHash extends EventFilter{
    blockHash: number;
}

function toGQLAddressTopicsObj(filter: EventFilter): {address: string, topic0:any,topic1:any,topic2:any,topic3:any} {
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
    filter: EventFilter,
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
    let EVM_EVENT_GQL_STRING = '{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"evmEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String_comparison_exp"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"blockId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint_comparison_exp"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"topic0"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String_comparison_exp"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"topic1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String_comparison_exp"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"topic2"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String_comparison_exp"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"topic3"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String_comparison_exp"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"evm_event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"block_id"},"value":{"kind":"EnumValue","value":"desc"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"extrinsic_index"},"value":{"kind":"EnumValue","value":"desc"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"event_index"},"value":{"kind":"EnumValue","value":"desc"}}]}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contract_address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"topic_0"},"value":{"kind":"Variable","name":{"kind":"Name","value":"topic0"}}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"topic_1"},"value":{"kind":"Variable","name":{"kind":"Name","value":"topic1"}}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"topic_2"},"value":{"kind":"Variable","name":{"kind":"Name","value":"topic2"}}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"topic_3"},"value":{"kind":"Variable","name":{"kind":"Name","value":"topic3"}}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"method"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"Log","block":false}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"block_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"blockId"}}}]}]}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract_address"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"data_parsed"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"data_raw"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"topic_0"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"topic_1"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"topic_2"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"topic_3"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"block_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"extrinsic_index"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"event_index"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":918}}';
    console.log("QQQQQ112221=",EVM_EVENT_GQL_STRING);
    return {
        query: JSON.parse(EVM_EVENT_GQL_STRING),
        variables: {
            ...toGQLAddressTopicsObj(filter),
            blockId: toBlockId ? {_gte: fromBlockId, _lte: toBlockId} : {_eq: fromBlockId},
        },
        fetchPolicy: 'network-only',
    };
};

const toEvmEventFilter = (contractAddress: string, methodSignature?: string, topicsFilter: any[] = []): EventFilter=>{
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
    console.log("FINALLLLL=",JSON.stringify(FINALISED_BLOCK_GQL));
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

function toSanitizedEvmParamType(evmParamType: string) {
    return evmParamType==='uint'?'uint256':evmParamType;
}

const toEvmEventMemberDefinition = (eventAbiDef:string): EvmEventDefinition | null => {
    let startDefStr = 'event ';
    if(!eventAbiDef.startsWith(startDefStr)){
        return null;
    }
    let strippedDef = eventAbiDef
        .trim()
        .substring(startDefStr.length);
    let paramsStart = strippedDef.indexOf('(')+1;
    let paramsEnd = strippedDef.indexOf(')', paramsStart);
    const eventName = strippedDef.substring(0, paramsStart-1);
    const paramsRaw = strippedDef.substring(paramsStart, paramsEnd);
    const paramsSplit = paramsRaw.split(',')
    const paramNames = paramsSplit.map(param => toSanitizedEvmParamType(param.trim().split(' ')[0]));
    const paramsIndexed = paramsSplit.map(param => param.indexOf('indexed') > -1);
    const topic0Unencoded = eventName + '(' + paramNames.join(',') + ')';
    return {eventName, paramNames, topic0Unencoded, paramsIndexed}
}

type EventFilterGeneratorFn = (...topicFilters: any[])=>EventFilter;

const createEventDefFilterGenerator=(contractAddress: string, evDefinition: EvmEventDefinition): EventFilterGeneratorFn =>{
    return (...topicFilters: any[]): EventFilter => {
        const isParamIndexedOrNullArr = topicFilters.map((topicFilter, i)=> !topicFilter || !!evDefinition.paramsIndexed[i])
        if(isParamIndexedOrNullArr.some(isIndexed => !isIndexed)){
            const unindexedAndFilteredParamNames = isParamIndexedOrNullArr.map((isIdx, i)=>!isIdx?evDefinition.paramNames[i]:null).filter(v=>!!v);
            console.warn('evm event filter on unindexed params contract=',contractAddress, ' event=', evDefinition.eventName, ' params=', unindexedAndFilteredParamNames )
        }
        return toEvmEventFilter(contractAddress, evDefinition.topic0Unencoded, topicFilters)
    };
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
    const reefSigner: ReefSigner | undefined = hooks.useObservableState(appState.selectedSigner$);
    const [lastEvents, setLastEvents] = useState<any>();
    const [contractAddress, setContractAddress] = useState('');
    const customEventSubs = useRef<any>();
    const libEventSubs = useRef<any>();

    useEffect(() => {
        // custom graphQL example
        async function fn() {
            if (!apolloClient || !reefSigner) {
                return;
            }
            const methodSignature = 'Transfer(address,address,uint256)'
            customEventSubs.current?.unsubscribe();
            let fromBlockId = 0;
            customEventSubs.current = getEvmEvents$(apolloClient, contractAddress, methodSignature, fromBlockId).subscribe((val: any) => {
                console.log("EVM EVENTS=", val);
                setLastEvents(val)
            });
            const testAbi = [
                "event Transfer(address indexed src, address indexed dst, uint256 val)"
            ];
            const sig: unknown = reefSigner.signer;
            const contract = new ethers.Contract(contractAddress, testAbi, sig as ethers.Signer)
            contract.once('Transfer', (res) => {
                console.log("CONTRACT ONCE EV=", res);
            });
            let filters = createContractFiltersInstance('0xccccc', testAbi);
            console.log('FFFFFEEEE', filters.Transfer('0x1111'))
        };
        fn();
        return () => {
            customEventSubs.current?.unsubscribe();
        }
    }, [apolloClient, contractAddress, reefSigner]);

    useEffect(() => {
        if (!contractAddress) {
            return;
        }
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
