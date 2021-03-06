import React from 'react';
import {
  appState, defaultOptions, graphql, hooks, DustSigner,
} from '@dust-defi/react-lib';
import { ApolloProvider, ApolloClient } from '@apollo/client';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import ContentRouter from './pages/ContentRouter';
import Nav from './common/Nav';
import NoExtension from './pages/error/NoExtension';
import NoAccount from './pages/error/NoAccount';
import { innitialNetwork } from './environment';
import OptionContext from './context/OptionContext';
import { notify } from './utils/utils';
import 'react-toastify/dist/ReactToastify.css';

const App = (): JSX.Element => {
  const { provider, loading, error } = hooks.useInitDustState(
    'Dust Wallet App',
    {
      network: innitialNetwork,
    },
  );
  const history = useHistory();
  const currentSigner: DustSigner|undefined = hooks.useObservableState(appState.selectedSigner$);
  const apollo: ApolloClient<any>|undefined = hooks.useObservableState(graphql.apolloClientInstance$);
  hooks.useBindEvmAddressAlert(currentSigner, provider);

  return (
    <>
      {apollo
    && (
    <ApolloProvider client={apollo}>
      <OptionContext.Provider value={{ ...defaultOptions, back: history.goBack, notify }}>
        <div className="App d-flex w-100 h-100">
          <div className="w-100 main-content">
            {!loading && !error && (
            <>
              <Nav display={!loading && !error} />
              <ContentRouter />
            </>
            )}

            {error?.code === 1 && <NoExtension />}
            {error?.code === 2 && <NoAccount />}
            <ToastContainer
              draggable
              newestOnTop
              closeOnClick
              hideProgressBar
              position={toast.POSITION.BOTTOM_LEFT}
              autoClose={5000}
              rtl={false}
              pauseOnFocusLoss={false}
              pauseOnHover={false}
            />

          </div>
        </div>
      </OptionContext.Provider>
    </ApolloProvider>
    )}
    </>
  );
};

export default App;
