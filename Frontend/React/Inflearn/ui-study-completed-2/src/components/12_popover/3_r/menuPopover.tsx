import useStyleInView from '@/hook/useStyleInView'
import cx from '../cx'
import { RefObject } from 'react'

const menuPosition = {
  top: -4,
  bottom: -4,
  left: 8,
  right: 8,
}
const MenuPopover = ({
  id,
  close,
  wrapperRef,
  dialogRef,
  opened,
}: {
  id: string
  close: () => void
  wrapperRef: RefObject<HTMLElement>
  dialogRef: RefObject<HTMLDialogElement>
  opened: boolean
}) => {
  const style = useStyleInView(wrapperRef, dialogRef, menuPosition, 'absolute', opened)

  return (
    <dialog className={cx('MenuDialog')} ref={dialogRef} style={style} onClick={close}>
      <ul className={cx('menus')} onClick={e => e.stopPropagation()}>
        <li>#{id}</li>
        <li>스레드의 댓글</li>
        <li>메시지 전달</li>
        <li>나중을 위해 저장</li>
        <li>읽지 않음으로 표시</li>
        <li>삭제</li>
      </ul>
    </dialog>
  )
}

export default MenuPopover
