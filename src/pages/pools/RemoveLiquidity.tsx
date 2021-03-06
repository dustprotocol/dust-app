import React from 'react';
import {
  Components,
  Token,
  appState,
  hooks,
  Network,
  DustSigner,
} from '@dust-defi/react-lib';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { POOLS_URL } from '../../urls';
import { useTokensFinder } from '../../hooks/useTokensFinder';
import { notify } from '../../utils/utils';

const { RemoveLiquidityComponent } = Components;

interface UrlParams {
  address1: string;
  address2: string;
}

const RemoveLiquidity = (): JSX.Element => {
  const history = useHistory();
  const { address1, address2 } = useParams<UrlParams>();
  const tokens: Token[] | undefined = hooks.useObservableState(
    appState.allAvailableSignerTokens$,
  );
  const network: Network | undefined = hooks.useObservableState(
    appState.currentNetwork$,
  );
  const signer: DustSigner | undefined = hooks.useObservableState(
    appState.selectedSigner$,
  );

  const [token1, token2, state] = useTokensFinder({
    address1,
    address2,
    tokens,
    signer,
  });
  const back = (): void => history.goBack();

  // Redirecting to pools page if any of tokens is empty on success
  if (state === 'Success' && (token1.isEmpty || token2.isEmpty)) {
    return <Redirect to={POOLS_URL} />;
  }

  if (state !== 'Success' || !network) {
    return <div />;
  }

  return (
    <RemoveLiquidityComponent
      token1={token1}
      token2={token2}
      signer={signer}
      network={network}
      options={{ back, notify }}
    />
  );
};

export default RemoveLiquidity;
