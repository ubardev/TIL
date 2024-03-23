import { useCallback, useEffect, useRef, useState } from 'react'
import cx from './cx'
import data from './data'
import useIntersectionObserver from '@/hook/useIntersectionObserverV2'

const HeaderHeight = 60

const ListItem = ({
  id,
  index,
  title,
  description,
}: {
  id: string
  index: number
  title: string
  description: string
}) => {
  return (
    <li id={id} data-index={index}>
      <p>
        <strong>
          {index + 1}. {title}
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

const IOOptions: IntersectionObserverInit = {
  rootMargin: `-${HeaderHeight}px 0% 0% 0%`,
  threshold: [0.5, 1],
}

type Elem = HTMLElement | null
const ScrollSpy2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const navsRef = useRef<Elem[]>([])
  const itemsRef = useRef<Elem[]>([])
  const { entries } = useIntersectionObserver(itemsRef, IOOptions)

  const setCurrentItem = useCallback((index: number) => {
    setCurrentIndex(index)
    navsRef.current[index]?.scrollIntoView({
      block: 'nearest',
      inline: 'center',
      behavior: 'instant',
    })
  }, [])

  const handleNavClick = useCallback((index: number) => {
    const scrollTop = document.scrollingElement!.scrollTop
    const itemY = itemsRef.current[index]?.getBoundingClientRect().top || 0
    const top = scrollTop + itemY - HeaderHeight
    window.scrollTo({
      top,
      behavior: 'smooth',
    })
  }, [])

  useEffect(() => {
    itemsRef.current = data.map((d, i) => document.getElementById(d.id))
  }, [])

  useEffect(() => {
    const entryTops = entries.map(e => e.boundingClientRect.top)
    const topMin = Math.min(...entryTops)
    const $target = entries.find(e => e.boundingClientRect.top === topMin)?.target as HTMLElement
    const index = $target?.dataset.index
    if (typeof index === 'string') setCurrentItem(+index)
  }, [entries])

  return (
    <div className={cx('ScrollSpy')}>
      <header className={cx('floatingHeader')}>
        <h3 className={cx('title')}>
          스크롤 스파이 #2. React<sub>IntersectionObserver</sub>
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
          <ListItem {...item} index={item.index} key={item.id} />
        ))}
      </ul>
    </div>
  )
}

export default ScrollSpy2
