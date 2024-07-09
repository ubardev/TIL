import { ReactNode, SyntheticEvent } from 'react'
import cx from '../cx'
import { createPortal } from 'react-dom'

const Modal = ({
  hideOnClickOutside = false,
  children,
  opened,
  hide,
}: {
  hideOnClickOutside?: boolean
  children: ReactNode
  opened: boolean
  hide: () => void
}) => {
  const stopPropagation = (e: SyntheticEvent) => e.stopPropagation()

  return opened
    ? createPortal(
        <div className={cx('Modal')} onClick={hideOnClickOutside ? hide : undefined}>
          <div className={cx('inner')} onClick={stopPropagation}>
            {children}
          </div>
        </div>,
        document.querySelector('#modalRoot')!,
      )
    : null
}

const ModalHeader = ({
  title,
  children,
  hide,
}: {
  title?: string
  children?: ReactNode
  hide?: () => void
}) => {
  return (
    <div className={cx('ModalHeader')}>
      <div className={cx('title')}>{title}</div>
      {children}
      <button className={cx('close')} onClick={hide} />
    </div>
  )
}

const ModalContent = ({ children }: { children: ReactNode }) => {
  return <div className={cx('ModalContent')}>{children}</div>
}

const ModalFooter = ({ children }: { children: ReactNode }) => {
  return <div className={cx('ModalFooter')}>{children}</div>
}

Modal.Header = ModalHeader
Modal.Content = ModalContent
Modal.Footer = ModalFooter

/* Compound Component */

export default Modal
