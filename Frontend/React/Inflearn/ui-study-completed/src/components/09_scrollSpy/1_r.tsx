import { useCallback, useEffect, useRef, useState } from 'react'
import cx from './cx'
import data from './data'
import ViewportContextProvider, { useViewportRect } from '@/context/viewportContext'

const HeaderHeight = 60

const ListItem = ({
  id,
  number,
  title,
  description,
}: {
  id: string
  number: number
  title: string
  description: string
}) => {
  return (
    <li id={id} data-number={number}>
      <p>
        <strong>
          {number}. {title}
        </strong>
      </p>
      <div>
        {description.split('\r\n').map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </li>
  )
}
type ItemInfo = {
  index: number
  top: number
  height: number
  elem: HTMLElement
} | null

const ScrollSpy = () => {
  const { top: viewportTop, scrollHeight } = useViewportRect()
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsRef = useRef<ItemInfo[]>([])
  const navsRef = useRef<(HTMLLIElement | null)[]>([])

  const setCurrentItem = useCallback(() => {
    const scrollTop = viewportTop * -1
    const target = itemsRef.current.find(
      item =>
        item &&
        scrollTop >= item.top - HeaderHeight - item.height / 2 &&
        scrollTop < item.top - HeaderHeight + item.height / 2,
    )
    if (target) {
      setCurrentIndex(target.index)
      navsRef.current[target.index]?.scrollIntoView({
        block: 'nearest',
        inline: 'center',
        behavior: 'instant',
      })
    }
  }, [viewportTop])

  const handleNavClick = useCallback((index: number) => {
    const itemY = (itemsRef.current[index]?.top || 0) - HeaderHeight
    window.scrollTo({
      top: itemY,
      behavior: 'smooth',
    })
  }, [])

  useEffect(() => {
    const calculateItems = () => {
      const scrollTop = document.scrollingElement!.scrollTop
      itemsRef.current = data.map((d, i) => {
        const $item = document.getElementById(d.id)
        if (!$item) return null
        const { top, height } = $item.getBoundingClientRect()
        return { elem: $item, top: top + scrollTop, height, index: i }
      })
    }
    calculateItems()

    const resizeObserver = new ResizeObserver(calculateItems)
    resizeObserver.observe(document.scrollingElement!)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    setCurrentItem()
  }, [viewportTop])

  return (
    <div className={cx('ScrollSpy')}>
      <header className={cx('floatingHeader')}>
        <h3 className={cx('title')}>
          스크롤 스파이 #1. React<sub>scroll event</sub>
        </h3>
        <ul className={cx('nav')}>
          {data.map(({ index, id }) => (
            <li
              className={cx('navItem', { current: currentIndex === index })}
              key={id}
              ref={r => {
                navsRef.current[index] = r
              }}
            >
              <button onClick={() => handleNavClick(index)}>{index + 1}</button>
            </li>
          ))}
        </ul>
      </header>
      <ul>
        {data.map(item => (
          <ListItem {...item} number={item.index + 1} key={item.id} />
        ))}
      </ul>
    </div>
  )
}

const ScrollSpy1 = () => {
  return (
    <ViewportContextProvider>
      <ScrollSpy />
    </ViewportContextProvider>
  )
}
export default ScrollSpy1
