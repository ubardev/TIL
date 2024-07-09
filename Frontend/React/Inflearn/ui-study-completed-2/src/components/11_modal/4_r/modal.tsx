import { ReactNode, RefObject, SyntheticEvent, useCallback } from 'react'
import cx from '../cx'

const Modal = ({
  modalRef,
  hideOnClickOutside = false,
  children,
  hide,
  onClose,
  className,
}: {
  modalRef: RefObject<HTMLDialogElement>
  hideOnClickOutside?: boolean
  children: ReactNode
  hide: () => void
  onClose?: (...arg: any[]) => void
  className?: string
}) => {
  const handleClose = () => {
    hide()
    onClose?.()
  }

  const handleClick = useCallback(
    (e: SyntheticEvent) => {
      if (hideOnClickOutside && modalRef.current === e.target) {
        handleClose()
      }
    },
    [hideOnClickOutside],
  )

  return (
    <dialog className={cx('Dialog', className)} ref={modalRef} onClick={handleClick}>
      {children}
    </dialog>
  )
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
    <div className={cx('ModalHeader', 'gModalHeader')}>
      <div className={cx('title')}>{title}</div>
      {children}
      <button className={cx('close', 'gModalClose')} onClick={hide} />
    </div>
  )
}

const ModalContent = ({
  className = '',
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return <div className={cx('ModalContent', className)}>{children}</div>
}

const ModalFooter = ({ children }: { children: ReactNode }) => {
  return <div className={cx('ModalFooter')}>{children}</div>
}

Modal.Header = ModalHeader
Modal.Content = ModalContent
Modal.Footer = ModalFooter

/* Compound Component */

export default Modal
