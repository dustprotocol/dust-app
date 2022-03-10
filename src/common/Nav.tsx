import React from 'react';
import {
  Components, appState, hooks, ReefSigner, Network,
} from '@reef-defi/react-lib';
import './Nav.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { saveSignerLocalPointer } from '../store/internalStore';
import { ReefLogo } from './Icons';
import {
  BONDS_URL,
  CREATE_ERC20_TOKEN_URL, DASHBOARD_URL, POOLS_URL, SWAP_URL, TRANSFER_TOKEN,
} from '../urls';

const menuItems = [
  {
    title: 'Dashboard',
    url: DASHBOARD_URL
  },
  {
    title: 'Send',
    url: TRANSFER_TOKEN
  },
  {
    title: 'Swap',
    url: SWAP_URL
  },
  {
    title: 'Pools',
    url: POOLS_URL
  },
  {
    title: 'Staking',
    url: BONDS_URL
  },
  {
    title: 'Creator',
    url: CREATE_ERC20_TOKEN_URL
  }
];

export interface Nav {
  display: boolean;
  evmBound: boolean;
}

const Nav = ({
  display,
  evmBound,
}: Nav): JSX.Element => {
  const history = useHistory();
  const { pathname } = useLocation();
  const signer: ReefSigner | undefined = hooks.useObservableState(appState.selectedSigner$);
  const accounts: ReefSigner[] | undefined = hooks.useObservableState(appState.signers$);
  const network: Network | undefined = hooks.useObservableState(appState.selectedNetworkSubj);
  const selectAccount = (index: number): void => {
    saveSignerLocalPointer(index);
    appState.selectAddressSubj.next(index != null ? accounts?.[index].address : undefined);
  };

  const menuItemsView = menuItems
    .map((item) => {
      let classes = 'navigation_menu-items_menu-item';
      if (pathname === item.url) {
        classes += ' navigation_menu-items_menu-item--active';
      }
      return (
        <li key={item.title} className={classes}>
          <Link to={item.url} className="navigation_menu-items_menu-item_link">
            {item.title}
          </Link>
        </li>
      );
    });

  return (
    <>
      <div className="nav-content navigation d-flex d-flex-space-between">
        <div className="logo-w">
          <button type="button" className="logo-btn" onClick={() => {
            history.push('/');
          }}>
            <div className="svg-w h-100 w-100">
              <ReefLogo/>
            </div>
          </button>
        </div>

        {display && (
          <nav className="d-flex justify-content-end d-flex-vert-center">
            <ul className="navigation_menu-items ">
              {menuItemsView}
            </ul>
            {accounts && !!accounts.length && network && (

              <Components.AccountSelector
                accounts={accounts}
                selectedSigner={signer}
                selectAccount={selectAccount}
                reefscanUrl={network.reefscanUrl}
              />
            )}
          </nav>
        )}
      </div>
      {!evmBound &&
      <Link to={'/bind'} className="navigation_menu-items_menu-item_link">
        <div className='evm-not-bound__alert text-color-dark'>
          <span>EVM Address not bound. Bind it to enable Ethereum VM Capabilities on Reef chain.</span>
          <div className='question-tooltip'>
            <div className='question-mark'>
              <Components.Tooltip.QuestionTooltip>
                <span>Bind an EVM account to your Substrate account, so that you can use a single account for any transaction on the Reef chain.</span>
              </Components.Tooltip.QuestionTooltip>
            </div>
          </div>
        </div>
      </Link>
      }
    </>

  );
};

export default Nav;
