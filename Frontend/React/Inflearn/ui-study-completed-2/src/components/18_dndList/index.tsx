import { DragEvent, ForwardedRef, forwardRef, useRef, useState } from 'react'
import cx from './cx'
import data from './data'

type DndItemType = {
  id: string
  number: number
  text: string
}

const DndItem = (
  {
    id,
    number,
    text,
    isDragging,
    handleMouseDown,
    handleDragStart,
  }: DndItemType & {
    isDragging: boolean
    handleMouseDown: () => void
    handleDragStart: (e: DragEvent) => void
  },
  ref: ForwardedRef<HTMLLIElement>,
) => {
  return (
    <li
      data-id={id}
      className={cx('item', { dragging: isDragging })}
      draggable={isDragging}
      onDragStart={handleDragStart}
      ref={ref}
    >
      <div className={cx('description')}>
        #{number} {text}
      </div>
      <i className={cx('drag-handle')} onMouseDown={handleMouseDown} data-drag-handle />
    </li>
  )
}

const ForwardedDndItem = forwardRef(DndItem)

const DndList = () => {
  const [list, setList] = useState<DndItemType[]>(data)
  const [draggingId, setDraggingId] = useState<string | null>(null)
  const itemsRef = useRef<(HTMLLIElement | null)[]>([])
  const cacheList = useRef<DndItemType[]>(data)

  const handleMouseDown = (id: string) => () => {
    setDraggingId(id)
  }

  const handleDragStart = (e: DragEvent) => {
    cacheList.current = list
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
    const el = e.target as HTMLElement
    if (!el.dataset.dragHandle) return

    const { clientY } = e
    const $itemUnder = itemsRef.current!.find(
      sib => sib && sib.offsetTop - sib.offsetHeight / 2 >= clientY,
    )
    if ($itemUnder) {
      const draggingItemIndex = list.findIndex(item => item.id === draggingId)
      const draggingItem = list[draggingItemIndex]
      const targetItemIndex = list.findIndex(item => item.id === $itemUnder.dataset.id)
      setList(prev => {
        const next = prev.filter(p => p !== draggingItem)
        next.splice(targetItemIndex - 1, 0, draggingItem)
        return next
      })
    }
  }

  const handleDragEnd = (e: DragEvent) => {
    console.log(e.dataTransfer)
    if (e.dataTransfer.dropEffect === 'none') setList(cacheList.current)
    setDraggingId(null)
  }

  return (
    <ul className={cx('DraggableList')} onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
      {list.map((item, i) => (
        <ForwardedDndItem
          {...item}
          key={item.id}
          isDragging={draggingId === item.id}
          handleMouseDown={handleMouseDown(item.id)}
          handleDragStart={handleDragStart}
          ref={r => {
            itemsRef.current[i] = r
          }}
        />
      ))}
    </ul>
  )
}

export default DndList

// https://medium.com/@alexandereardon/beautiful-interactions-8f67502ccf73
