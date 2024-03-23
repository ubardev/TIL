import { pickRandom, randomize, waitFor } from '@/service/util'
import data from '../data'
import { useCallback, useState } from 'react'

export type Datum = {
  index: number
  id: string
  title: string
  description: string
}
export type FetchState<T> = {
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
  ) /* 시간지연 랜덤하게 해보자 */
  return randomData
}

const useInfiniteFetcher = () => {
  const [state, setState] = useState<FetchState<Datum>>({
    state: 'idle',
    data: [],
  })

  const fetchNextPage = useCallback(async () => {
    setState(prev => ({
      ...prev,
      state: 'loading',
    }))

    const nextPageData = await generatePageData()

    setState(prev => {
      const nextData = [...(prev.data || []), nextPageData]
      return {
        data: nextData,
        state: 'fetched',
      }
    })
  }, [])

  return {
    ...state,
    fetchNextPage,
  }
}

export default useInfiniteFetcher

// swr. tanstack-query: infiniteQuery => [ [20개], [20개], [20개]...]
