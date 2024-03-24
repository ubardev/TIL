import VanillaWrapper from '@/components/vanillaWrapper'
import cx from '../cx'
import infinitePageFetcher, { Datum, FetchState } from './infiniteFetcher'
import vanillaIntersectionObserver from '@/hook/vanilla/intersectionObserver'

const generateListItem = ({ id, number, title, description }: Datum & { number: number }) => {
  const $li = document.createElement('li')
  $li.insertAdjacentHTML(
    'beforeend',
    `
  <p><strong>${number}. ${title}</strong></p>
  <div>${description}</div>
  `,
  )
  return $li
}

const initiator = (wrapper: HTMLDivElement) => {
  const $more = document.createElement('div')
  const $list = document.createElement('ul')
  const $spinner = document.createElement('div')
  $spinner.classList.add(cx('spinner'))

  let prevState: FetchState = 'idle'
  let page = 0

  const handleFetch = (state: FetchState, data?: Datum[]) => {
    if (prevState === state) return
    prevState = state

    if (state === 'loading') wrapper.insertAdjacentElement('beforeend', $spinner)
    else $spinner.remove()

    if (state === 'fetched' && data) {
      page += 1
      const list = data.map((item, i) =>
        generateListItem({ ...item, number: (page - 1) * 20 + i + 1 }),
      )
      $list.append(...list)
    }
  }

  const handleIntersect = ([entry]: IntersectionObserverEntry[] = []) => {
    const isIntersecting = entry?.isIntersecting
    if (isIntersecting && prevState !== 'loading') infinitePageFetcher(handleFetch)
  }

  wrapper.append($list, $more)
  vanillaIntersectionObserver($more, { threshold: 1 }, handleIntersect)
}

const InfiniteScrollV = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <h2>무한스크롤</h2>
      <VanillaWrapper title="#2" initiator={initiator} />
    </div>
  )
}

export default InfiniteScrollV
