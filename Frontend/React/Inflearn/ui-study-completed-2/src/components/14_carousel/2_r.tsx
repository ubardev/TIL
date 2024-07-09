import { useCallback, useEffect, useRef, useState } from 'react'
import cx from './cx'
import data from './data'
import Pagination from '../13_imageSlide/pagination'

type Direction = 'left' | 'right'

export const Carousel = ({
  images,
  initialIndex = 0,
}: {
  images: string[]
  initialIndex?: number
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const itemsRef = useRef<(HTMLLIElement | null)[]>([])

  const moveTo = useCallback(
    (nextIndex: number, direction?: Direction) => {
      const $current = itemsRef.current![currentIndex] as HTMLLIElement
      const $next = itemsRef.current![nextIndex] as HTMLLIElement
      if (nextIndex === currentIndex) return

      const dir = direction || (nextIndex > currentIndex ? 'right' : 'left')

      const handleAnimationEnd = () => {
        $current.className = cx('item')
        $next.className = cx('item', 'current')
        $current.removeEventListener('animationend', handleAnimationEnd)
        setCurrentIndex(nextIndex)
      }
      $current.addEventListener('animationend', handleAnimationEnd)
      $current.classList.add(cx(`${dir}_current`))
      $next.classList.add(cx(`${dir}_next`))
    },
    [currentIndex],
  )

  const move = useCallback(
    (direction: Direction) => {
      const nextIndex =
        ((direction === 'right' ? currentIndex + 1 : currentIndex - 1) + images.length) %
        images.length
      moveTo(nextIndex, direction)
    },
    [images, currentIndex, moveTo],
  )

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [images, initialIndex])

  return (
    <div className={cx('carousel', 'carousel1')}>
      <ul className={cx('container')}>
        {images.map((url, index) => (
          <li
            key={index}
            className={cx('item', {
              current: index === currentIndex,
            })}
            ref={r => {
              itemsRef.current[index] = r
            }}
          >
            <img src={url} width="600" height="320" />
            <span>#{index + 1}</span>
          </li>
        ))}
      </ul>
      <button className={cx('navButton', 'navLeft')} onClick={() => move('left')} />
      <button className={cx('navButton', 'navRight')} onClick={() => move('right')} />
      <Pagination
        totalPages={images.length}
        currentIndex={currentIndex}
        visibleCount={6}
        handleMove={moveTo}
      />
    </div>
  )
}

const Carousel2 = () => {
  return (
    <>
      <h3>#2. React</h3>
      <Carousel images={data} />
    </>
  )
}

export default Carousel2
