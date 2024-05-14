import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MetaSwap',
  description:
    'The most popular AMM on BSC by user count! Earn MTW through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens on a platform you can trust.',
  image: 'https://dex.metaworth.exchange/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('MetaSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('MetaSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('MetaSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('MetaSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('MetaSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('MetaSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('MetaSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('MetaSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('MetaSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('MetaSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('MetaSwap')}`,
      }
    default:
      return null
  }
}
