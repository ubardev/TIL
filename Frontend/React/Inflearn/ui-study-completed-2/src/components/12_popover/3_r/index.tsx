import useInfiniteScroll from '@/components/part1/useInfiniteScroll'
import cx from '../cx'
import { SyntheticEvent, useRef, useState } from 'react'
import MenuPopover from './menuPopover'
import ViewportContextProvider from '@/context/viewportContext'

const ListItem = ({ id, title, index }: { id: string; title: string; index: number }) => {
  const [opened, setIsOpened] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const handleClickButton = (e: SyntheticEvent) => {
    e.stopPropagation()
    if (dialogRef.current) {
      dialogRef.current.showModal()
      setIsOpened(true)
    }
  }
  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close()
      setIsOpened(false)
    }
  }

  return (
    <li id={id} className={cx('list-item')}>
      #{index + 1}. {title}
      <button className={cx('popover-button')} onClick={handleClickButton} ref={buttonRef} />
      <MenuPopover
        id={index + 1 + ''}
        close={closeDialog}
        wrapperRef={buttonRef}
        dialogRef={dialogRef}
        opened={opened}
      />
    </li>
  )
}

const Popover3 = () => {
  const { data, state, moreRef } = useInfiniteScroll()

  return (
    <ViewportContextProvider>
      <div className={cx('Popovers')}>
        <h2>팝오버</h2>
        <h3>
          #3. React<sub>HTML Dialog</sub>
        </h3>
        <ul className={cx('list')}>
          {data.map((page, i) => page.map((item, j) => <ListItem {...item} key={`${i}_${j}`} />))}
        </ul>
        <div ref={moreRef} />
        {state === 'loading' && <div>Loading...</div>}
      </div>
    </ViewportContextProvider>
  )
}

export default Popover3

/* 
24. 1. 27. 17:00 정재남
-----------------------
dialog.show 메서드는 backdrop이 없고, 좌표수정하기에도 어려우며, overflow:hidden에도 대응하지 못해서
부득이 showModal로 수정했습니다. 현재까지의 제 결론은 다음과 같습니다.

1) 좌표 계산이 어렵지만, overflow:hidden에서 자유롭기 위해서는 결국 absolute 타입이 나은 것 같습니다.
2) popover에는 dialog show 메소드를 쓰기에 적합하지 않은 듯 합니다.
*/
