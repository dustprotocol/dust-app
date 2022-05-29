import React from 'react';
import './Staking.css';
import {
  appState, hooks, Network, DustSigner,
} from '@dust-defi/react-lib';
import { BondsComponent } from '../bonds/BondsComponent';
import { bonds, IBond } from '../bonds/utils/bonds';

export const Staking = (): JSX.Element => {
  const selectedSigner: DustSigner | undefined = hooks.useObservableState(appState.selectedSigner$);
  const network: Network | undefined = hooks.useObservableState(appState.currentNetwork$);

  return (
    <div className="staking">
      {
        bonds?.length
          ? (
            <div className="col-12 staking__bonds">
              <>
                {network && selectedSigner ? (
                  bonds.map((bond: IBond) => (
                    <BondsComponent
                      key={bond.id}
                      account={selectedSigner}
                      bond={bond}
                    />
                  ))
                ) : <div />}
              </>
            </div>
          )
          : <div>No bonds available.</div>
      }
    </div>
  );
};
