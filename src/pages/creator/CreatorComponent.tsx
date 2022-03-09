import {
  availableNetworks,
  Components, Network, ReefSigner, reefTokenWithAmount, utils as reefUtils,
} from '@reef-defi/react-lib';
import React, { useEffect, useState } from 'react';
import { Contract, ContractFactory, utils } from 'ethers';
import { Link } from 'react-router-dom';
import { verifyContract } from '../../utils/contract';
import { metadataReef20Deploy, contractsReef20Deploy, metadataArtifactReef20Deploy } from './reef20DeployTokenData';
import { metadataReef20WithBurn, metadataArtifactReef20WithBurn, contractsReef20WithBurn } from './reef20DeployDataWithBurn';
import { getTokenVerifyArgs } from './verify.utils';
import { metadataReef20WithMintAndBurn } from './reef20DeployDataWithMintAndBurn';
import { metadataReef20DeployWithMint } from './reef20DeployDataWithMint';

const {
  Display, Card: CardModule, TokenAmountFieldMax, Modal, Loading, Input: InputModule,
  TokenAmountView, Label, Button: ButtonModule,
} = Components;
const {

  ComponentCenter, MT, CenterColumn, Margin, CenterRow,
} = Display;
const {
  CardHeader, CardHeaderBlank, CardTitle, Card,
} = CardModule;
const {
  OpenModalButton, default: ConfirmationModal, ModalFooter, ModalBody,
} = Modal;

const { LoadingButtonIconWithText } = Loading;
const { Input, NumberInput, InputAmount, CheckboxInput } = InputModule;
const { ConfirmLabel } = Label;
const { calculateUsdAmount } = reefUtils;
const { Button } = ButtonModule;

interface CreatorComponent {
    signer: ReefSigner | undefined;
    network: Network;
    onTxUpdate?: reefUtils.TxStatusHandler;
}

interface ITokenOptions {
  burnable: boolean;
  mintable: boolean;
}

async function verify(contract: Contract, args: string[], network: Network, tokenOptions: ITokenOptions): Promise<boolean> {
  const verifyArgs = getTokenVerifyArgs(tokenOptions)
  const verified = await verifyContract(
    contract,
    verifyArgs,
    args,
    network.reefscanUrl
  );
  return verified;
}

const createToken = async ({
  signer, network, tokenName, symbol, initialSupply, tokenOptions, onTxUpdate, setResultMessage, setVerifiedContract, setDeployedContract,
}: {signer?: ReefSigner, setResultMessage: any, tokenName: string, symbol: string, initialSupply: string, tokenOptions: ITokenOptions, network: Network, onTxUpdate?: reefUtils.TxStatusHandler, setVerifiedContract: any, setDeployedContract: any}): Promise<void> => {
  if (!signer) {
    console.log('signer not set ');
    return;
  }
  setResultMessage({ complete: false, title: 'Deploying token', message: 'Sending token contract to blockchain.' });
  const args = [tokenName, symbol.toUpperCase(), utils.parseEther(initialSupply).toString()];
  let deployAbi;
  let deployBytecode;
  if (tokenOptions.burnable && tokenOptions.mintable) { // BURN & MINT
    deployAbi = metadataReef20WithMintAndBurn.abi;
    deployBytecode = `0x${metadataReef20WithMintAndBurn.bytecode.object}`;
  } else if (tokenOptions.burnable && !tokenOptions.mintable) { // BURN
    deployAbi = metadataReef20WithBurn.abi;
    deployBytecode = `0x${metadataReef20WithBurn.bytecode.object}`;
  } else if (!tokenOptions.burnable && tokenOptions.mintable) { // MINT
    deployAbi = metadataReef20DeployWithMint.abi;
    deployBytecode = `0x${metadataReef20DeployWithMint.data.bytecode.object}`;
  } else { // NONE
    deployAbi = metadataReef20Deploy.abi;
    deployBytecode = `0x${metadataReef20Deploy.data.bytecode.object}`;
  }
  const reef20Contract = new ContractFactory(deployAbi, deployBytecode, signer?.signer);
  const txIdent = Math.random().toString(10);
  let contract: Contract|undefined;
  let verified = false;
  if (onTxUpdate) {
    onTxUpdate({
      txIdent,
    });
  }
  try {
    contract = await reef20Contract.deploy(...args);

  } catch (err:any) {
    if (onTxUpdate) {
      onTxUpdate({
        txIdent,
        error: { message: err.message, code: reefUtils.TX_STATUS_ERROR_CODE.ERROR_UNDEFINED },
        txTypeEvm: true,
        addresses: [signer.address],
      });
    }
    console.log('deploy err=', err);
  }
  if (!contract) {
    setResultMessage({ complete: true, title: 'Error creating token', message: 'Deploying contract failed.' });
    return;
  }
  setDeployedContract(contract);
  if (onTxUpdate) {
    onTxUpdate({
      txIdent,
      txHash: contract.hash,
      isInBlock: true,
      txTypeEvm: true,
      url: `https://${network === availableNetworks.mainnet ? '' : `${network.name}.`}reefscan.com/extrinsic/${contract.hash}`,
      addresses: [signer.address],
    });
  }
  try {
    setResultMessage({ complete: false, title: 'Verifying deployed token', message: 'Smart contract bytecode is being validated.' });
    verified = await
      verify(contract, args, network, tokenOptions);
  } catch (err) {
    console.log('verify err=', err);
  }
  if (verified) {
    setVerifiedContract(contract);
    setResultMessage({ complete: true, title: 'Token created', message: `Congratulations, you have your new token ${tokenName} with address ${contract.address} in your assets. Innitial supply is ${initialSupply} ${symbol.toUpperCase()}. Next step is to create a pool so users can start trading.` });
  } else {
    setResultMessage({ complete: true, title: 'Error verifying token', message: `Verifying deployed contract ${contract.address} failed.` });
  }
};

export const CreatorComponent = ({
  signer, onTxUpdate, network,
}: CreatorComponent): JSX.Element => {
  const [resultMessage, setResultMessage] = useState<{complete: boolean, title: string, message: string} | null>(null);
  const [tokenName, setTokenName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [tokenOptions, setTokenOptions] = useState<ITokenOptions>({ burnable: false, mintable: false });
  const [initialSupply, setInitialSupply] = useState('');
  const [validationMsg, setValidationMsg] = useState('');
  const [verifiedContract, setVerifiedContract] = useState<Contract>();
  const [deployedContract, setDeployedContract] = useState<Contract>();

  useEffect(() => {
    if (tokenName.trim().length < 1) {
      setValidationMsg('Set token name');
      return;
    }

    if (symbol.trim().length < 1) {
      setValidationMsg('Set token symbol');
      return;
    }

    if (initialSupply.trim().length < 1) {
      setValidationMsg('Set innitial supply');
      return;
    }
    const iSupply = parseInt(initialSupply, 10);
    if (Number.isNaN(iSupply) || iSupply < 1) {
      setValidationMsg('Initial supply must be positive whole number');
      return;
    }
    try {
      utils.parseEther(initialSupply);
    } catch (e) {
      setValidationMsg('Initial supply not valid');
      return;
    }

    setValidationMsg('');
  }, [tokenName, symbol, initialSupply]);

  const init = (): void => {
    setTokenName('');
    setSymbol('');
    setInitialSupply('');
    setResultMessage(null);
  };

  return (
    <>
      { !resultMessage
    && (
    <>
      <ComponentCenter>
        <Card>
          <CardHeader>
            <CardHeaderBlank />
            <CardTitle title="Create Your Token" />
            <CardHeaderBlank />
          </CardHeader>

          <MT size="2">
            <Input
              value={tokenName}
              maxLength={42}
              onChange={setTokenName}
              placeholder="Token Name"
            />
          </MT>
          <MT size="2">
            <Input
              value={symbol}
              maxLength={42}
              onChange={setSymbol}
              placeholder="Token Symbol"
            />
          </MT>
          <MT size="2">
            <NumberInput
              className="form-control form-control-lg border-rad"
              value={initialSupply}
              min={1}
              onChange={(e) => { setInitialSupply(e || ''); }}
              disableDecimals
              placeholder="Token Initial Supply Number"
            />
            <div><small className="text-color-disabled">{initialSupply && `Decimal value on chain: ${utils.parseEther(initialSupply)}`}</small></div>
          </MT>
          { JSON.stringify(tokenOptions) }
          <MT size="2">
            <div className="d-flex justify-content-between">
            <CheckboxInput
              checked={tokenOptions.burnable}
              onChange={(evt) => setTokenOptions({...tokenOptions, burnable: !tokenOptions.burnable})}
              id='burn'
              labelText='Burnable'
            />
            <CheckboxInput
              checked={tokenOptions.mintable}
              onChange={(evt) => setTokenOptions({...tokenOptions, mintable: !tokenOptions.mintable})}
              id='mint'
              labelText='Mintable'
            />
            </div>
          </MT>
          <MT size="2">
            <CenterColumn>
              <OpenModalButton id="createModalToggle" disabled={!!validationMsg}>
                {validationMsg || 'Create'}
              </OpenModalButton>
            </CenterColumn>
          </MT>
        </Card>
      </ComponentCenter>

      <ConfirmationModal
        id="createModalToggle"
        title="Confirm and Create"
        confirmBtnLabel="Create"
        confirmFun={() => createToken({
          signer, network, tokenName, symbol, tokenOptions, initialSupply, onTxUpdate, setResultMessage, setVerifiedContract, setDeployedContract,
        })}
      >
        <Margin size="3">
          <ConfirmLabel title="Name" value={tokenName} />
        </Margin>
        <Margin size="3">
          <ConfirmLabel title="Symbol" value={symbol.toUpperCase()} />
        </Margin>
        <Margin size="3">
          <ConfirmLabel title="Initial Supply" value={initialSupply ? utils.parseEther(initialSupply).toString() : ''} />
        </Margin>
        <Margin size="3">
          <ConfirmLabel title="Burnable" value={tokenOptions.burnable ? 'Yes' : 'No'} />
        </Margin>
        <Margin size="3">
          <ConfirmLabel title="Mintable" value={tokenOptions.mintable ? 'Yes' : 'No'} />
        </Margin>
      </ConfirmationModal>
    </>
    )}

      {resultMessage && (
      <ComponentCenter>
        <Card>
          <CardHeader>
            <CardHeaderBlank />
            <CardTitle title={resultMessage.title} />
            <CardHeaderBlank />
          </CardHeader>
          <MT size="3">
            <div className="text-center">
              {!resultMessage.complete && <Loading.Loading />}
              <div>{resultMessage.message}</div>
            </div>
          </MT>
          <MT size="2">
            <ModalFooter>
              <Button disabled={!resultMessage.complete} onClick={init}>Close</Button>
              {resultMessage.complete && (
              <Link to={`/add-supply//${deployedContract?.address}`} className="btn btn-reef border-rad">
                Create pool
              </Link>
              )}
              {!resultMessage.complete && <Button disabled>Create pool</Button>}
            </ModalFooter>
          </MT>
        </Card>
      </ComponentCenter>
      )}
    </>
  );
};
