import { useEffect, useRef, useState } from 'react'
import cx from '../cx'
import data from '../data'
import useIntersectionObserver from '@/hook/useIntersectionObserver'

const ioOptions: IntersectionObserverInit = {
  threshold: 0,
}

const Wrapper = ({
  url,
  width,
  height,
  children,
}: {
  url: string
  width: number
  height: number
  children: React.ReactNode
}) => {
  const smallSizeUrl = url.replace('/600/320', '/60/32')

  return (
    <div
      style={{
        backgroundImage: `url(${smallSizeUrl})`,
        width: `${width}px`,
        height: `${height}px`,
      }}
      className={cx('container')}
    >
      {children}
    </div>
  )
}

const LazyImage = ({ src, width, height }: { src: string; width: number; height: number }) => {
  const imgRef = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState(false)
  const { entries, observerRef } = useIntersectionObserver(imgRef, ioOptions)

  const onLoad = () => {
    setLoaded(true)
  }

  useEffect(() => {
    const imgElement = imgRef.current
    if (!imgElement) return

    if ('loading' in HTMLImageElement.prototype) {
      imgElement.setAttribute('src', src)
      imgElement.setAttribute('loading', 'lazy')
      observerRef.current?.disconnect()
      return
    }

    const isVisible = entries[0]?.isIntersecting
    if (isVisible) {
      imgElement.addEventListener('load', onLoad, { once: true })
      imgElement.setAttribute('src', src)
      observerRef.current?.disconnect()
    }

    return () => {
      imgElement.removeEventListener('load', onLoad)
    }
  }, [src, entries, observerRef])

  return (
    <Wrapper url={src} width={width} height={height}>
      <img
        className={cx('image')}
        ref={imgRef}
        width={width}
        height={height}
        style={{ opacity: loaded ? 1 : 0 }}
        onLoad={onLoad}
        alt=""
      />
    </Wrapper>
  )
}

const LazyLoad3 = () => {
  return (
    <>
      <h2>지연로딩</h2>
      <h3>
        #3. React<sub>작은 이미지 미리 로딩 - by 이승효(@bingwer)</sub>
      </h3>
      {data.map((url: string, index: number) => (
        <LazyImage src={url} width={600} height={320} key={index} />
      ))}
    </>
  )
}

export default LazyLoad3
