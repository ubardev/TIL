import data from './data'
import { useCallback, useEffect, useRef, useState } from 'react'
import cx from './cx'

type Direction = 'left' | 'right'
const dataLength = data.length

const ImageSlide3R = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLUListElement>(null)

  const move = useCallback(
    (direction: Direction) => () => {
      setCurrentIndex(prev => {
        const next = ((direction === 'right' ? prev + 1 : prev - 1) + dataLength) % dataLength
        containerRef.current!.scrollTo({
          left: next * 600,
          behavior: 'smooth',
        })
        return next
      })
    },
    [],
  )

  useEffect(() => {
    if (containerRef.current) containerRef.current.scrollLeft = 0
  }, [])

  return (
    <>
      <h3>
        #3. React <sub>스크롤 이동 (with css)</sub>
      </h3>
      <div className={cx('imageSlide', 'imageSlide3')} ref={wrapperRef}>
        <ul className={cx('container')} ref={containerRef} id="imageSlideContainer">
          {data.map((url, index) => (
            <li key={index} className={cx('item')}>
              <img src={url} width={600} height={320} />
              <span>#{index + 1}</span>
            </li>
          ))}
        </ul>
        <button className={cx('navButton', 'navLeft')} onClick={move('left')} />
        <button className={cx('navButton', 'navRight')} onClick={move('right')} />
      </div>
    </>
  )
}

export default ImageSlide3R
