import { availableNetworks, Network } from '@dust-defi/react-lib';

export const innitialNetwork = { ...availableNetworks.mainnet };
/* || availableNetworks.testnet || */
/* {
  name: 'testnet',
  rpcUrl: 'ws://localhost:9944',
  dustscanUrl: 'http://localhost:8000',
  factoryAddress: '0xcA36bA38f2776184242d3652b17bA4A77842707e',
  routerAddress: '0x0A2906130B1EcBffbE1Edb63D5417002956dFd41',
  graphqlUrl: 'http://localhost:8080/v1/graphql',
} as Network; */

export const appAvailableNetworks = [availableNetworks.mainnet, availableNetworks.testnet];
