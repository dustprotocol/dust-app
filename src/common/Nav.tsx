import React from 'react';
import {
  Components, appState, hooks, DustSigner, Network, availableNetworks,
} from '@dust-defi/react-lib';
import './Nav.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { saveSignerLocalPointer } from '../store/internalStore';
import { DustLogo } from './Icons';
import {
  BONDS_URL,
  CREATE_ERC20_TOKEN_URL, DASHBOARD_URL, defaultSwapUrl, POOLS_URL, TRANSFER_TOKEN,
} from '../urls';
import { appAvailableNetworks } from '../environment';

const menuItems = [
  { title: 'Dashboard', url: DASHBOARD_URL },
  { title: 'Send', url: TRANSFER_TOKEN },
  { title: 'Swap', url: defaultSwapUrl },
  { title: 'Pools', url: POOLS_URL },
  { title: 'Staking', url: BONDS_URL },
  { title: 'Creator', url: CREATE_ERC20_TOKEN_URL },
];

export interface Nav {
    display: boolean;
}

const Nav = ({ display }: Nav): JSX.Element => {
  const history = useHistory();
  const { pathname } = useLocation();
  const signer: DustSigner|undefined = hooks.useObservableState(appState.selectedSigner$);
  const accounts: DustSigner[]|undefined = hooks.useObservableState(appState.signers$);
  const network: Network|undefined = hooks.useObservableState(appState.currentNetwork$);
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
    <div className="nav-content navigation d-flex d-flex-space-between">
      <div className="navigation__wrapper">
        <div className="logo-w">
          <button type="button" className="logo-btn" onClick={() => { history.push('/'); }}>
            <div className="svg-w h-100 w-100">
              <DustLogo />
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
              dustscanUrl={network.dustscanUrl}
              selectNetwork={appState.setCurrentNetwork}
              availableNetworks={appAvailableNetworks}
            />
            )}
          </nav>
        )}
      </div>
    </div>
  );
};

export default Nav;
