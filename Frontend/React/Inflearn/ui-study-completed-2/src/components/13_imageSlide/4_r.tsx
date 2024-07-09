import data from './data'
import { useCallback, useEffect, useRef, useState } from 'react'
import cx from './cx'
import Pagination from './pagination'

type Direction = 'left' | 'right'
const dataLength = data.length

const ImageSlide4R = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLUListElement>(null)
  const scrollingRef = useRef(false)

  const moveTo = useCallback((index: number) => {
    if (scrollingRef.current) return
    containerRef.current!.scrollTo({
      left: index * 600,
      behavior: 'smooth',
    })
    scrollingRef.current = true
    setCurrentIndex(index)
  }, [])

  const move = useCallback(
    (direction: Direction) => () => {
      if (scrollingRef.current) return
      setCurrentIndex(prev => {
        const next = ((direction === 'right' ? prev + 1 : prev - 1) + dataLength) % dataLength
        containerRef.current!.scrollTo({
          left: next * 600,
          behavior: 'smooth',
        })
        scrollingRef.current = true
        return next
      })
    },
    [],
  )

  useEffect(() => {
    const handleScrollEnd = () => {
      scrollingRef.current = false
    }
    const $container = containerRef.current
    if ($container) {
      $container.scrollLeft = 0
      $container.addEventListener('scrollend', handleScrollEnd)
    }
    return () => {
      $container?.removeEventListener('scrollend', handleScrollEnd)
    }
  }, [])

  return (
    <>
      <h3>
        #4. React <sub>페이지네이션 추가</sub>
      </h3>
      <div className={cx('imageSlide', 'imageSlide4')} ref={wrapperRef}>
        <ul className={cx('container')} ref={containerRef}>
          {data.map((url, index) => (
            <li key={index} className={cx('item')}>
              <img src={url} width={600} height={320} />
              <span>#{index + 1}</span>
            </li>
          ))}
        </ul>
        <button className={cx('navButton', 'navLeft')} onClick={move('left')} />
        <button className={cx('navButton', 'navRight')} onClick={move('right')} />
        <Pagination
          totalPages={dataLength}
          currentIndex={currentIndex}
          visibleCount={7}
          handleMove={moveTo}
        />
      </div>
    </>
  )
}

export default ImageSlide4R
