import { randomize, waitFor } from '@/service/util'
import { useCallback, useEffect, useState } from 'react'

const allAlbums = [
  {
    id: 13,
    title: 'Let It Be',
    year: 1970,
  },
  {
    id: 12,
    title: 'Abbey Road',
    year: 1969,
  },
  {
    id: 11,
    title: 'Yellow Submarine',
    year: 1969,
  },
  {
    id: 10,
    title: 'The Beatles',
    year: 1968,
  },
  {
    id: 9,
    title: 'Magical Mystery Tour',
    year: 1967,
  },
  {
    id: 8,
    title: "Sgt. Pepper's Lonely Hearts Club Band",
    year: 1967,
  },
  {
    id: 7,
    title: 'Revolver',
    year: 1966,
  },
  {
    id: 6,
    title: 'Rubber Soul',
    year: 1965,
  },
  {
    id: 5,
    title: 'Help!',
    year: 1965,
  },
  {
    id: 4,
    title: 'Beatles For Sale',
    year: 1964,
  },
  {
    id: 3,
    title: "A Hard Day's Night",
    year: 1964,
  },
  {
    id: 2,
    title: 'With The Beatles',
    year: 1963,
  },
  {
    id: 1,
    title: 'Please Please Me',
    year: 1963,
  },
]

let cache = new Map()

async function getSearchResults(query: string) {
  await waitFor(
    500,
    // randomize({ min: 500, max: 1500, step: 100 })
  )

  const lowerQuery = query.trim().toLowerCase()
  return allAlbums.filter(album => {
    const lowerTitle = album.title.toLowerCase()
    return lowerTitle.startsWith(lowerQuery) || lowerTitle.indexOf(' ' + lowerQuery) !== -1
  })
}

async function getData(url: string) {
  if (url.startsWith('/search?q=')) {
    return await getSearchResults(url.slice('/search?q='.length))
  } else {
    throw Error('Not implemented')
  }
}

export function fetchData(url: string) {
  if (!cache.has(url)) {
    cache.set(url, getData(url))
  }
  return cache.get(url)
}

export const useFetch = <T>(query: string, enabled: boolean) => {
  const [state, setState] = useState<'idle' | 'loading' | 'fetched'>('idle')
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    const fetch = async (query: string) => {
      setState('loading')
      const result = (await fetchData(query)) as T
      setData(result)
      setState('fetched')
    }
    if (enabled) fetch(query)
    else setData([] as T)
  }, [query, fetch, enabled])

  return {
    data,
    state,
  }
}
