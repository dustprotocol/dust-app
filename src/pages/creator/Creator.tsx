import React from 'react';
import {
  appState, hooks, Network, DustSigner,
} from '@dust-defi/react-lib';
import { CreatorComponent } from './CreatorComponent';

export const Creator = (): JSX.Element => {
  const selectedSigner: DustSigner|undefined = hooks.useObservableState(appState.selectedSigner$);
  const network: Network|undefined = hooks.useObservableState(appState.currentNetwork$);

  /* const onCreatorTxUpdate = (txState: utils.TxStatusUpdate): void => {
    const updateTypes = [UpdateDataType.ACCOUNT_NATIVE_BALANCE, UpdateDataType.ACCOUNT_TOKENS];
    const updateActions: UpdateAction[] = createUpdateActions(updateTypes, txState.addresses);
    onTxUpdateResetSigners(txState, updateActions);
  }; */

  return (
    <>
      {network && (
      <CreatorComponent
        signer={selectedSigner}
        network={network}
      />
      )}
    </>
  );
};
