import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 1,
    stakingToken: tokens.mtw,
    earningToken: tokens.mtkey,
    contractAddress: {
      97: '',
      56: '0x00cE223B0F5AC7CF059b7f6bB0D1f3eC59a94873',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '5',
  },
]

export default pools
