import { pickRandom, randomize, waitFor } from '@/service/util'
import data from '../data'

export type Datum = {
  index: number
  id: string
  title: string
  description: string
}
export type FetchState = 'loading' | 'fetched' | 'idle' | 'error'
export type State<T> = {
  data: T[][]
  state: 'loading' | 'fetched' | 'idle' | 'error'
}

const generatePageData = async () => {
  const randomData = pickRandom({ data, length: 20 })
  await waitFor(
    randomize({
      min: 300,
      max: 1500,
      step: 50,
    }),
  )
  return randomData
}

const infinitePageFetcher = async (callback: (state: FetchState, data?: Datum[]) => void) => {
  callback('loading')
  const nextPageData = await generatePageData()
  callback('fetched', nextPageData)
}

export default infinitePageFetcher
