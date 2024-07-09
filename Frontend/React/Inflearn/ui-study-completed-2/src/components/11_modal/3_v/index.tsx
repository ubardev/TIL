import VanillaWrapper from '@/components/vanillaWrapper'
import { stringToDOM } from '@/service/util'
import { AlertModal, ConfirmModal } from './modalComponents'

const AlertTrigger = ({ id, text }: { id: string; text: string }) => {
  const $btn = stringToDOM(`<button>얼럿 띄우기</button>`)
  $btn.addEventListener('click', () => AlertModal({ id, text }))
  return $btn
}

const ConfirmTrigger = ({ id, children }: { id: string; children: Element[] | [string] }) => {
  const setConfirmed = (flag: boolean) => {
    $btn.textContent = `컨펌모달 열기 ${flag ? '확인됨' : '확인안됨'}`
  }
  const handleConfirm = () => setConfirmed(true)
  const handleCancel = () => setConfirmed(false)

  const $btn = stringToDOM(`<button>컨펌모달 열기 확인안됨</button>`)

  $btn.addEventListener('click', () =>
    ConfirmModal({
      id,
      title: '주의!',
      children,
      onConfirm: handleConfirm,
      onCancel: handleCancel,
    }),
  )
  return $btn
}

const initiator = (wrapper: HTMLDivElement) => {
  const template = document.createElement('template')
  template.insertAdjacentHTML(
    'beforeend',
    Array.from({ length: 10 }, () => '<p>____place____holder____</p>').join(''),
  )

  template.insertAdjacentElement(
    'beforeend',
    AlertTrigger({ id: '1', text: '1번 경고입니다. 아무튼 경고예요.' }),
  )

  template.insertAdjacentHTML(
    'beforeend',
    Array.from({ length: 10 }, () => '<p>____place____holder____</p>').join(''),
  )

  const confirm2 = ConfirmTrigger({
    id: '2',
    children: [stringToDOM(`<p>이건 이래서 저런 문제가 있는데, 정말 진행합니까?</p>`)],
  })
  template.insertAdjacentElement('beforeend', confirm2)

  template.insertAdjacentHTML(
    'beforeend',
    Array.from({ length: 10 }, () => '<p>____place____holder____</p>').join(''),
  )

  const confirm5 = ConfirmTrigger({
    id: '5',
    children: [stringToDOM(`<p>이건 이래서 저런 문제가 있는데, 정말 진행합니까?</p>`)],
  })
  const confirm4 = ConfirmTrigger({
    id: '4',
    children: [
      stringToDOM(`<p>이건 이래서 저런 문제가 있는데, 정말 진행합니까?</p>`),
      stringToDOM(`<p>중첩해서 모달을 띄워봅시다아</p>`),
      stringToDOM(`<p>중첩해서 모달을 띄워봅시다아</p>`),
      confirm5,
    ],
  })
  const confirm3 = ConfirmTrigger({
    id: '3',
    children: [
      stringToDOM(`<p>이건 이래서 저런 문제가 있는데, 정말 진행합니까?</p>`),
      stringToDOM(`<p>중첩해서 모달을 띄워봅시다아</p>`),
      stringToDOM(`<p>중첩해서 모달을 띄워봅시다아</p>`),
      stringToDOM(`<p>중첩해서 모달을 띄워봅시다아</p>`),
      confirm4,
    ],
  })

  template.insertAdjacentElement('beforeend', confirm3)

  template.insertAdjacentHTML(
    'beforeend',
    Array.from({ length: 10 }, () => '<p>____place____holder____</p>').join(''),
  )

  wrapper.append(...template.children, stringToDOM('<div id="modalRoot">'))
}

const ModalV = () => (
  <>
    <h2>모달</h2>
    <VanillaWrapper title="#3" initiator={initiator} />
  </>
)

export default ModalV
