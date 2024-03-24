import { useEffect, useRef, useState } from 'react'
import cx from '../cx'
import data from '../data'
import useIntersectionObserver from '@/hook/useIntersectionObserver'

const ioOptions: IntersectionObserverInit = {
  threshold: 0,
}

export const LazyImage = ({
  src,
  width,
  height,
}: {
  src: string
  width: number
  height: number
}) => {
  const imgRef = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState(false)
  const { entries, observerRef } = useIntersectionObserver(imgRef, ioOptions)

  const onLoad = () => {
    setLoaded(true)
  }

  useEffect(() => {
    if ('loading' in HTMLImageElement.prototype) {
      imgRef.current!.setAttribute('src', src)
      imgRef.current!.setAttribute('loading', 'lazy')
      observerRef.current?.disconnect()
      return
    }

    const isVisible = entries[0]?.isIntersecting
    if (isVisible) {
      imgRef.current!.setAttribute('src', src)
      observerRef.current?.disconnect()
    }
  }, [src, entries])

  return (
    <img
      ref={imgRef}
      className={cx({ lazy: !loaded })}
      width={width}
      height={height}
      onLoad={onLoad}
      alt=""
    />
  )
}

const LazyLoad1 = () => {
  return (
    <>
      <h2>지연로딩</h2>
      <h3>#1. React</h3>
      {data.map((url, index) => (
        <LazyImage src={url} key={index} width={600} height={320} />
      ))}
    </>
  )
}

export default LazyLoad1
