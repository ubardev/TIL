import { RefObject, lazy, useEffect, useRef, useState } from 'react'
import useIntersectionObserver from '@/hook/useIntersectionObserver'
import classNames from 'classnames/bind'
import style from './lazyImage.module.scss'

const cx = classNames.bind(style)

type ImageProps = {
  src: string
  rootElemRef?: RefObject<HTMLElement>
  width: number
  height: number
} & Record<string, any>

const ioOptions: IntersectionObserverInit = {
  threshold: 0,
}

const lazyEnabled =
  typeof HTMLImageElement !== 'undefined' && 'loading' in HTMLImageElement.prototype
// 얘는 서버에서는 무조건 false
// 브라우저 진입시 true일수도 있고 false일수도 있다.
// true일때 => 클라이언트값이 server랑 달라요 error

const BuiltinImage = ({ rootElemRef, ...props }: ImageProps) => {
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const handleLoaded = () => {
      imgRef.current?.classList.remove(cx('lazy'))
    }
    if (imgRef.current) {
      imgRef.current.addEventListener('load', handleLoaded, { once: true })
    }
  }, [])

  return <img ref={imgRef} {...props} className={cx('lazy')} loading="lazy" />
}

export const LazyLoadImage = ({ src, rootElemRef, width, height, ...otherProps }: ImageProps) => {
  const imgRef = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState(false)

  ioOptions.root = rootElemRef?.current ?? null
  const { entries, observerRef } = useIntersectionObserver(imgRef, ioOptions)

  const onLoad = () => {
    setLoaded(true)
  }

  useEffect(() => {
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
      {...otherProps}
    />
  )
}

const LazyImage = lazyEnabled ? BuiltinImage : LazyLoadImage

export default LazyImage
