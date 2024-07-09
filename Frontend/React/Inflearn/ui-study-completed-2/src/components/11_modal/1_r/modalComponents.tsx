import { ReactNode, SyntheticEvent } from 'react'
import Modal from './modal'
import { useSetModals } from './modalContext'

export const AlertModal = ({ id, text }: { id: string; text: string }) => {
  const { closeModal } = useSetModals()
  const closeThis = () => closeModal(id)

  return (
    <Modal id={id}>
      <Modal.Content>
        <p>{text}</p>
      </Modal.Content>
      <Modal.Footer>
        <button onClick={closeThis}>확인</button>
      </Modal.Footer>
    </Modal>
  )
}

export const ConfirmModal = ({
  id,
  children,
  confirmed,
  onConfirm,
  onCancel,
  hide,
}: {
  id: string
  children: ReactNode
  confirmed: boolean | null
  onConfirm: () => void
  onCancel: () => void
  hide: () => void
}) => {
  return (
    <Modal id={id} hideOnClickOutside>
      <Modal.Header title={confirmed ? '확인된 컨펌' : '확인안된 컨펌'} hide={hide} />
      <Modal.Content>{children}</Modal.Content>
      <Modal.Footer>
        <button onClick={onConfirm}>확인</button>
        <button onClick={onCancel}>취소</button>
      </Modal.Footer>
    </Modal>
  )
}

export const FormModal = ({
  id,
  children,
  onSubmit,
  onCancel,
}: {
  id: string
  children: ReactNode
  onSubmit?: (formData: FormData) => void
  onCancel?: () => void
}) => {
  const formId = `form_${id}`
  const { closeModal } = useSetModals()
  const closeThis = () => closeModal(id)

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    const data = new FormData(e.target as HTMLFormElement)
    onSubmit?.(data)
    closeThis()
  }
  const handleCancel = () => {
    onCancel?.()
    closeThis()
  }

  return (
    <Modal id={id}>
      <Modal.Header hide={closeThis} />
      <Modal.Content>
        <form id={formId} onSubmit={handleSubmit}>
          {children}
        </form>
      </Modal.Content>
      <Modal.Footer>
        <button type="submit" form={formId}>
          확인
        </button>
        <button type="button" onClick={handleCancel}>
          취소
        </button>
      </Modal.Footer>
    </Modal>
  )
}
