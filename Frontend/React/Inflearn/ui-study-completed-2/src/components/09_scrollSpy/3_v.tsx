import vanillaIntersectionObserverV2 from '@/hook/vanilla/intersectionObserverV2'
import VanillaWrapper from '../vanillaWrapper'
import cx from './cx'
import data from './data'

const HeaderHeight = 60

const generateListItem = ({
  id,
  title,
  description,
  index,
}: {
  id: string
  title: string
  description: string
  index: number
}) => {
  const elem = document.createElement('li')
  elem.id = id
  elem.setAttribute('data-index', index + '')
  elem.insertAdjacentHTML(
    'afterbegin',
    `<p><strong>${index + 1}. ${title}</strong></p>
    <div>
    ${description
      .split('\r\n')
      .map((line, i) => `<p>${line}</p>`)
      .join('')}
    </div>`,
  )
  return elem
}

const IOOptions: IntersectionObserverInit = {
  rootMargin: `-${HeaderHeight}px 0% 0% 0%`,
  threshold: [0.5, 1],
}

const initiator = (wrapper: HTMLDivElement) => {
  let currentIndex = 0

  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    const $target = entries[0]?.target as HTMLElement
    const index = $target?.dataset.index
    if (typeof index === 'string') {
      currentIndex = +index
      $navItems.forEach(($el, i) => {
        $el.classList.toggle(cx('current'), i === currentIndex)
      })
      $navItems[currentIndex]?.scrollIntoView({
        block: 'nearest',
        inline: 'center',
        behavior: 'instant',
      })
    }
  }

  const handleNavClick = (e: Event) => {
    // e.target.parentElement.dataset.index
    // => 코드수정으로 계층구조가 바뀌면 parentElement.parentElement 로 바꿔야 할 수도...
    const path = e.composedPath() as HTMLElement[]
    const $li = path.find(el => el.localName === 'li')
    const index = +($li?.dataset.index || 0)

    const scrollTop = document.scrollingElement!.scrollTop
    const itemY = $items[index]?.getBoundingClientRect().top || 0
    const top = scrollTop + itemY - HeaderHeight
    window.scrollTo({
      top,
      behavior: 'smooth',
    })
  }

  const $navItems = data.map((_, i) => {
    const $button = document.createElement('button')
    $button.textContent = i + 1 + ''

    const $item = document.createElement('li')
    $item.classList.add(cx('navItem'))
    $item.setAttribute('data-index', i + '')
    $item.append($button)
    return $item
  })
  const $navList = document.createElement('ul')
  $navList.classList.add(cx('nav'))
  $navList.append(...$navItems)
  $navList.addEventListener('click', handleNavClick)

  const $header = document.createElement('header')
  $header.classList.add(cx('floatingHeader'))
  $header.insertAdjacentHTML(
    'afterbegin',
    `<h3 class="${cx('title')}">스크롤 스파이 #3. Vanilla <sub>IntersectionObserver</h3>`,
  )
  $header.append($navList)

  const $list = document.createElement('ul')
  const $items = data.map((d, i) => generateListItem({ ...d, index: i }))
  $list.append(...$items)

  vanillaIntersectionObserverV2($items, IOOptions, handleIntersect)

  wrapper.classList.add(cx('ScrollSpy'))
  wrapper.append($header, $list)
}

const ScrollSpy3V = () => <VanillaWrapper initiator={initiator} />

export default ScrollSpy3V
