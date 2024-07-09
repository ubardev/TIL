import useStyleInView from '@/hook/useStyleInView'
import cx from '../cx'
import { RefObject, useRef } from 'react'
import { createPortal } from 'react-dom'

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
}: {
  id: string
  close: () => void
  wrapperRef: RefObject<HTMLElement>
}) => {
  const targetRef = useRef<HTMLUListElement>(null)
  const style = useStyleInView(wrapperRef, targetRef, menuPosition, 'absolute')

  return createPortal(
    <div className={cx('MenuPopover')} onClick={close}>
      <ul className={cx('menus')} onClick={e => e.stopPropagation()} ref={targetRef} style={style}>
        <li>#{id}</li>
        <li>스레드의 댓글</li>
        <li>메시지 전달</li>
        <li>나중을 위해 저장</li>
        <li>읽지 않음으로 표시</li>
        <li>삭제</li>
      </ul>
    </div>,
    document.querySelector('#popoverRoot')!,
  )
}

export default MenuPopover
