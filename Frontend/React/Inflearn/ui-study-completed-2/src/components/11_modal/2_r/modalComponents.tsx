import { ReactNode, SyntheticEvent } from 'react'
import Modal from './modal'

export const AlertModal = ({
  opened,
  text,
  hide,
}: {
  opened: boolean
  text: string
  hide: () => void
}) => {
  return (
    <Modal opened={opened} hide={hide}>
      <Modal.Content>
        <p>{text}</p>
      </Modal.Content>
      <Modal.Footer>
        <button onClick={hide}>확인</button>
      </Modal.Footer>
    </Modal>
  )
}

export const ConfirmModal = ({
  opened,
  children,
  confirmed,
  onConfirm,
  onCancel,
  hide,
}: {
  opened: boolean
  children: ReactNode
  confirmed: boolean | null
  onConfirm: () => void
  onCancel: () => void
  hide: () => void
}) => {
  return (
    <Modal opened={opened} hide={hide} hideOnClickOutside>
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
  opened,
  children,
  onSubmit,
  onCancel,
  hide,
}: {
  id: string
  children: ReactNode
  opened: boolean
  onSubmit?: (formData: FormData) => void
  onCancel?: () => void
  hide: () => void
}) => {
  const formId = `form_${id}`

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    const data = new FormData(e.target as HTMLFormElement)
    onSubmit?.(data)
    hide()
  }
  const handleCancel = () => {
    onCancel?.()
    hide()
  }

  return (
    <Modal opened={opened} hide={hide}>
      <Modal.Header hide={hide} />
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
