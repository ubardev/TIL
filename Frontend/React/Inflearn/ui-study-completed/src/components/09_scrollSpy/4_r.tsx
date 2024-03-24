import { useCallback, useEffect, useRef, useState } from 'react'
import cx from './cx'
import data from './data'
import useIntersectionObserver from '@/hook/useIntersectionObserverV2'
import ScrollBox, { ScrollBoxHandle } from '../08_scrollBox/react/scrollBox'

const HeaderHeight = 60

const NavItem = ({
  id,
  index,
  handleClick,
}: {
  id: string
  index: number
  handleClick?: () => void
}) => <button onClick={handleClick}>{index + 1}</button>

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
const ScrollSpy4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollboxRef = useRef<ScrollBoxHandle>()
  const itemsRef = useRef<Elem[]>([])
  const { entries } = useIntersectionObserver(itemsRef, IOOptions)

  const setCurrentItem = useCallback((index: number) => {
    setCurrentIndex(index)
    scrollboxRef.current?.scrollFocus(index)
  }, [])

  const handleNavClick = useCallback(
    (item: unknown, index: number) => () => {
      const scrollTop = document.scrollingElement!.scrollTop
      const itemY = itemsRef.current[index]?.getBoundingClientRect().top || 0
      const top = scrollTop + itemY - HeaderHeight
      window.scrollTo({
        top,
        behavior: 'smooth',
      })
    },
    [],
  )

  useEffect(() => {
    itemsRef.current = data.map((d, i) => document.getElementById(d.id))
  }, [])

  useEffect(() => {
    const $target = entries[0]?.target as HTMLElement
    const index = $target?.dataset.index
    if (typeof index === 'string') setCurrentItem(+index)
  }, [entries])

  return (
    <div className={cx('ScrollSpy')}>
      <header className={cx('floatingHeader')}>
        <h3 className={cx('title')}>
          스크롤 스파이 #4. React <sub>IO + ScrollBox</sub>
        </h3>

        <ScrollBox
          ref={scrollboxRef}
          list={data}
          Item={NavItem}
          handleItemClick={handleNavClick}
          currentIndex={currentIndex}
          wrapperClassName={cx('nav', 'with-scrollbox')}
        />
      </header>
      <ul>
        {data.map(item => (
          <ListItem {...item} index={item.index} key={item.id} />
        ))}
      </ul>
    </div>
  )
}

export default ScrollSpy4
