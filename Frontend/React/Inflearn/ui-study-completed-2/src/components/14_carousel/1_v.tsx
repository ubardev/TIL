import { generateDOM } from '@/service/util'
import VanillaWrapper from '../vanillaWrapper'
import cx from './cx'
import data from './data'

type Direction = 'left' | 'right'
const dataLength = data.length

const initiator = (wrapper: HTMLDivElement) => {
  let currentIndex = 0
  let isAnimating = false

  const $ul = generateDOM('ul', cx('container'))
  const $items = data.map((url, index) => {
    const $li = generateDOM('li', cx('item'))
    $li.insertAdjacentHTML(
      'afterbegin',
      `
      <img src="${url}" width="600" height="320" loading="lazy" className="lazy" />
      <span>#${index + 1}</span>
    `,
    )
    $ul.append($li)
    return $li
  }) as HTMLLIElement[]
  $items[0].classList.add(cx('current'))

  const handleAnimationEnd = ($current: HTMLLIElement, $next: HTMLLIElement, newIndex: number) => {
    isAnimating = false
    $current.className = cx('item')
    $next.className = cx('item', 'current')
    currentIndex = newIndex
  }

  const move = (direction: Direction) => {
    if (isAnimating) return
    const next =
      ((direction === 'right' ? currentIndex + 1 : currentIndex - 1) + dataLength) % dataLength
    const $current = $items[currentIndex]
    const $next = $items[next]
    $current.classList.remove(cx('current'))
    $current.classList.add(cx(`${direction}_current`))
    $next.classList.add(cx(`${direction}_next`))
    $current.addEventListener('animationend', () => handleAnimationEnd($current, $next, next), {
      once: true,
    })
    isAnimating = true
  }

  const $left = generateDOM('button', cx('navButton', 'navLeft'))
  $left.addEventListener('click', () => move('left'))

  const $right = generateDOM('button', cx('navButton', 'navRight'))
  $right.addEventListener('click', () => move('right'))

  wrapper.classList.add(cx('carousel'))
  wrapper.append($ul, $left, $right)
}

const Carousel1V = () => <VanillaWrapper title="#1" initiator={initiator} />

export default Carousel1V
