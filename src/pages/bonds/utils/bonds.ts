export interface IBond {
  id: number;
  bondName: string;
  bondDescription: string;
  bondContractAddress: string;
  bondValidatorAddress?: string;
  stake: string;
  stakeTokenAddress: string;
  stakeTokenLogo: string;
  stakeDecimals: number;
  farm: string;
  farmTokenAddress: string;
  farmTokenLogo: string;
  farmDecimals: number;
  entryStartTime: string;
  apy: string;
}

export const bonds: IBond[] = [
  {
    id: 1,
    bondName: 'Dust community staking bond',
    bondDescription: '',
    bondContractAddress: '0x7D3596b724cEB02f2669b902E4F1EEDeEfad3be6',
    bondValidatorAddress: '5Hax9GZjpurht2RpDr5eNLKvEApECuNxUpmRbYs5iNh7LpHa',
    stake: 'DUST',
    stakeTokenAddress: '0x0000000000000000000000000000000001000000',
    stakeTokenLogo: 'https://stake.dust.finance/assets/images/dust/dust-token.svg',
    stakeDecimals: 0,
    farm: 'DUST',
    farmTokenAddress: '0x0000000000000000000000000000000001000000',
    farmTokenLogo: 'https://stake.dust.finance/assets/images/dust/dust-token.svg',
    farmDecimals: 0,
    entryStartTime: '',
    apy: '32',
  },
  /* {
  'id': 2,
  'bondName': 'Dust community staking bond',
  'bondDescription': '',
  'bondContractAddress': '0x6d53c4252263403554c0c89DA3890D5c2c487141',
  'stake': 'DUST',
  'stakeTokenAddress': '0x0000000000000000000000000000000001000000',
  'stakeTokenLogo': 'https://stake.dust.finance/assets/images/dust/dust-token.svg',
  'stakeDecimals': 0,
  'farm': 'DUST',
  'farmTokenAddress': '0x0000000000000000000000000000000001000000',
  'farmTokenLogo': 'https://stake.dust.finance/assets/images/dust/dust-token.svg',
  'farmDecimals': 0,
  'entryStartTime': '',
  'apy': '32'
  }, */
];
