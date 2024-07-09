import { generateDOM, stringToDOM } from '@/service/util'
import data from '../data'
import VanillaWrapper from '@/components/vanillaWrapper'
import cx from '../cx'
import initSnackbar from './snackar'

const initiator = (wrapper: HTMLDivElement) => {
  const $items = data.map(({ id, name }, index) => {
    const $snackbarContent = generateDOM('p', undefined, `${index + 1}. ${name} 스낵바 알림 `)
    const openSnackbar = initSnackbar($snackbarContent)
    const $button = generateDOM('button', undefined, '스낵바 띄우기')
    $button.addEventListener('click', openSnackbar)

    const $item = generateDOM('span', cx('listItem'), `#${index + 1} `)
    $item.append($button)

    return $item
  })
  wrapper.append(...$items, stringToDOM(`<div id="snackbarRoot" class="${cx('Snackbars')}"></div>`))
}

const SnackbarV = () => (
  <>
    <h2>스낵바</h2>
    <VanillaWrapper title="#3" initiator={initiator} />
  </>
)

export default SnackbarV
