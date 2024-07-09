import { ReactNode, useState } from 'react'
import { AlertModal, ConfirmModal, FormModal } from './modalComponents'
import useModal from './useModal'
import ModalRoot from './modalRoot'

const AlertTrigger = ({ id, text }: { id: string; text: string }) => {
  const { opened, openModal, closeModal } = useModal()

  return (
    <>
      <button onClick={openModal}>얼럿 띄우기</button>
      <AlertModal opened={opened} text={text} hide={closeModal} />
    </>
  )
}

const ConfirmTrigger = ({ id, children }: { id: string; children: ReactNode }) => {
  const { opened, openModal, closeModal } = useModal()
  const [confirmed, setConfirmed] = useState<boolean | null>(null)

  return (
    <>
      <button onClick={openModal}>확인모달열기 {confirmed ? '확인됨' : '확인안됨'}</button>
      <ConfirmModal
        opened={opened}
        confirmed={confirmed}
        onConfirm={() => {
          setConfirmed(true)
          closeModal()
        }}
        onCancel={() => {
          setConfirmed(false)
          closeModal()
        }}
        hide={closeModal}
      >
        {children}
      </ConfirmModal>
    </>
  )
}

const FormTrigger = ({ id }: { id: string }) => {
  const { opened, openModal, closeModal } = useModal()

  return (
    <>
      <button onClick={openModal}>폼모달 열기</button>
      <FormModal
        id={id}
        opened={opened}
        hide={closeModal}
        onSubmit={d => {
          console.log(Array.from(d))
        }}
      >
        <input name="name" placeholder="상품명" />
        <input name="price" type="number" placeholder="가격" />
        <label>
          <input name="soldOut" type="checkbox" /> 품절
        </label>
      </FormModal>
    </>
  )
}

const Modal2 = () => {
  return (
    <>
      <h2>모달</h2>
      <h3>
        #2. React<sub>createPortal</sub>
      </h3>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <AlertTrigger id="1" text="1번 경고입니다. 아무튼 경고예요." />
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <AlertTrigger id="2" text="2번 경고입니다. 주의하세욧!" />
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <ConfirmTrigger id="3">
        <p>이건 이래서 저런 문제가 있는데, 정말 진행합니까?</p>
      </ConfirmTrigger>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <ConfirmTrigger id="4">
        <>
          <p>이건 이래서 저런 문제가 있는데, 정말 진행합니까?</p>
          <p>중첩해서 모달을 띄워봅시다아</p>
          <p>중첩해서 모달을 띄워봅시다아</p>
          <p>중첩해서 모달을 띄워봅시다아</p>
          <ConfirmTrigger id="5">
            <>
              <p>이건 이런 문제가 있는데, 정말 진행합니까?</p>
              <p>중첩해서 모달을 띄워봅시다아</p>
              <p>중첩해서 모달을 띄워봅시다아</p>
              <ConfirmTrigger id="6">
                <p>이건 문제가 있는데, 정말 진행합니까?</p>
              </ConfirmTrigger>
            </>
          </ConfirmTrigger>
        </>
      </ConfirmTrigger>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <FormTrigger id="7" />

      <ModalRoot />
    </>
  )
}

export default Modal2
