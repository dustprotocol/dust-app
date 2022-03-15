import React from 'react';
import {appState, graphql, hooks, ReefSigner,} from '@reef-defi/react-lib';
import ContentRouter from './pages/ContentRouter';
import Nav from './common/Nav';
import NoExtension from "./pages/error/NoExtension"
import NoAccount from "./pages/error/NoAccount"
import {innitialNetwork} from './environment';
import {ApolloClient} from "@apollo/client";

const App = (): JSX.Element => {
  const apollo: ApolloClient<any>|undefined = hooks.useObservableState(graphql.apolloClientInstance$);
  const [signers, provider, selectedNetwork, loading, error] = hooks.useInitReefState( 'Reef Wallet App', innitialNetwork, undefined, apollo || true );
  const currentSigner: ReefSigner|undefined = hooks.useObservableState(appState.selectedSigner$);
  hooks.useBindEvmAddressAlert(currentSigner, provider);

  return (
    <>
      {apollo && (
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
        </div>
      </div>
      )}
    </>
  );
};

export default App;
