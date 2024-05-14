import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'MTW',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xe27a2a105967180ce4145A8Af3Da5F6077335118', /* 0x8Fb7a3d213C3a2B605386cd3617fE0eaaB7F3b1c */
    },
    token: tokens.mtw,
    quoteToken: tokens.busd,
  },
  {
    pid: 1,
    lpSymbol: 'MTW-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xA77F18196B687b1103Ac87DECDd9bA7834e285bC',
    },
    token: tokens.mtw,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'MTW-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xe27a2a105967180ce4145A8Af3Da5F6077335118',
    },
    token: tokens.mtw,
    quoteToken: tokens.busd,
  },
  {
    pid: 3,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16',
    },
    quoteToken: tokens.wbnb,
    token: tokens.busd,
  },
]

export default farms
