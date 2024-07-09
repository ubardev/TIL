import {
  ReactNode,
  RefObject,
  KeyboardEvent,
  useRef,
  useState,
  useCallback,
  SyntheticEvent,
  useEffect,
} from 'react'
import data from '../data'
import useDropdown from '@/components/16_dropdown/4_r/useDropdown'
import cx from '../cx'
import { DDList } from '@/components/16_dropdown/4_r'

type Country = {
  id: string
  name: string
}

export type ACFormProps<T> = {
  list: T[]
  isOpen: boolean
  selectedItem: T
  focusIndex: (index: number) => void
  selectIndex: (index: number) => void
  setItems: (items: T[]) => void
  toggle: (force?: boolean) => void
}

export type ACItemProps<T> = {
  item: T
  index: number
  focusedIndex: number
  selectedIndex: number
  selectIndex: (index: number) => void
  itemsRef: RefObject<HTMLElement[]>
}

export type ACContainerProps = {
  handleKeyDown: (e: KeyboardEvent) => void
}

const ACForm = ({
  list,
  selectedItem,
  isOpen,
  focusIndex,
  selectIndex,
  toggle,
  setItems,
}: ACFormProps<Country>) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleInput = useCallback((e: SyntheticEvent) => {
    const el = e.target as HTMLInputElement
    const val = el.value.trim().toLowerCase()
    const res = list.filter(({ name }) => val && name.toLowerCase().includes(val))
    focusIndex(-1)
    selectIndex(-1)
    setItems(res)
    if (res.length > 0) toggle(true)
  }, [])

  useEffect(() => {
    if (selectedItem && inputRef.current) inputRef.current.value = selectedItem.name
  }, [selectedItem])

  return (
    <div className={cx('form')}>
      <input
        type="text"
        name="country"
        placeholder="Search Country"
        autoComplete="off"
        onChange={handleInput}
        ref={inputRef}
      />
      <button
        className={cx('toggle-button', { open: isOpen })}
        type="button"
        onClick={() => toggle()}
      />
    </div>
  )
}

const ACItem = ({
  item,
  index,
  selectedIndex,
  focusedIndex,
  selectIndex,
  itemsRef,
}: ACItemProps<Country>) => {
  return (
    <li
      className={cx('item')}
      role="option"
      aria-selected={selectedIndex === index}
      aria-current={focusedIndex === index}
      ref={r => {
        if (r && itemsRef.current) itemsRef.current[index] = r
      }}
    >
      <button onClick={() => selectIndex(index)}>
        <span>{item.name}</span>
      </button>
    </li>
  )
}

const ACContainer = ({
  handleKeyDown,
  children,
  containerRef,
}: {
  handleKeyDown: (e: KeyboardEvent) => void
  children: ReactNode
  containerRef: RefObject<HTMLDivElement>
}) => {
  return (
    <div
      className={cx('Dropdown')}
      onKeyDown={handleKeyDown}
      onClick={e => e.stopPropagation()}
      ref={containerRef}
    >
      {children}
    </div>
  )
}

const Autocomplete1 = () => {
  const [items, setItems] = useState<Country[]>([])
  const { getContainerProps, getTriggerProps, getListProps, getItemProps, isOpen } =
    useDropdown(items)

  return (
    <ACContainer {...getContainerProps()}>
      <ACForm {...getTriggerProps()} list={data} isOpen={isOpen} setItems={setItems} />
      <DDList {...getListProps()}>
        {items.map((item, index) => (
          <ACItem key={item.id} {...getItemProps(index)} />
        ))}
      </DDList>
    </ACContainer>
  )
}

export default Autocomplete1
