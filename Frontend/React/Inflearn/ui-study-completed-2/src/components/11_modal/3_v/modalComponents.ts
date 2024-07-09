import { stringToDOM } from '@/service/util'
import Modal from './modal'

export const AlertModal = ({ id, text }: { id: string; text: string }) =>
  new Modal({
    id,
    title: '',
    contentChildren: [stringToDOM(`<p>${text}</p>`)],
    footerButtonProps: [
      {
        text: '확인',
        type: 'button',
        hideOnClick: true,
      },
    ],
  })

export const ConfirmModal = ({
  id,
  title,
  children,
  onConfirm,
  onCancel,
}: {
  id: string
  title: string
  children: Element[] | [string]
  onConfirm?: () => void
  onCancel?: () => void
}) =>
  new Modal({
    id,
    title,
    contentChildren: children,
    footerButtonProps: [
      {
        text: '확인',
        hideOnClick: true,
        handleClick: onConfirm,
      },
      {
        text: '취소',
        hideOnClick: true,
        handleClick: onCancel,
      },
    ],
  })
