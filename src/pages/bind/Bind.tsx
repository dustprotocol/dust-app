import { appState, Components, hooks, Network, ReefSigner } from '@reef-defi/react-lib';
import React from 'react';
import { TxStatusUpdate } from '@reef-defi/react-lib/dist/utils';

const onTxUpdate = (state: TxStatusUpdate) => {
  let updateActions: appState.UpdateAction[] = [];
  if (state.addresses && state.addresses.length) {
    state.addresses.forEach((address) => {
      updateActions.push({
        type: appState.UpdateDataType.ACCOUNT_EVM_BINDING,
        address
      } as appState.UpdateAction);
      updateActions.push({
        type: appState.UpdateDataType.ACCOUNT_NATIVE_BALANCE,
        address
      } as appState.UpdateAction);
    });
  } else {
    updateActions = [{ type: appState.UpdateDataType.ACCOUNT_EVM_BINDING }, { type: appState.UpdateDataType.ACCOUNT_NATIVE_BALANCE }];
  }
  appState.onTxUpdateResetSigners(state, updateActions);
}

export const Bind = (): JSX.Element => {
  const accounts: ReefSigner[] | undefined = hooks.useObservableState(appState.signers$);
  const selectedSigner: ReefSigner | undefined = hooks.useObservableState(appState.selectedSigner$);
  const network: Network | undefined = hooks.useObservableState(appState.selectedNetworkSubj);

  return (
    <>
      {network && selectedSigner && accounts &&
        <Components.EvmBindComponent
          onTxUpdate={onTxUpdate}
          signers={accounts}
          bindSigner={selectedSigner}
        >
        </Components.EvmBindComponent>
      }
    </>
  );
}
