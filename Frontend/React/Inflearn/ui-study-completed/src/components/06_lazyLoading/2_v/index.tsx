import VanillaWrapper from '@/components/vanillaWrapper'
import data from '../data'
import cx from '../cx'
import lazyLoad from './lazyLoad'

export const lazyImageBuilder = (src: string, width: number, height: number) => {
  const $elem = document.createElement('img')
  $elem.classList.add(cx('lazy'))
  $elem.setAttribute('width', width + 'px')
  $elem.setAttribute('height', height + 'px')
  const onLoad = () => {
    $elem.classList.remove(cx('lazy'))
  }
  $elem.addEventListener('load', onLoad)

  lazyLoad($elem, src)

  return $elem
}

const initiator = (wrapper: HTMLDivElement) => {
  const $imgs = data.map(src => lazyImageBuilder(src, 600, 320))
  wrapper.append(...$imgs)
}
const LazyLoad1_V = () => (
  <>
    <h2>지연로딩</h2>
    <VanillaWrapper title="#2" initiator={initiator} />
  </>
)

export default LazyLoad1_V
