import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  RefObject,
} from 'react'
import cx from '../cx'

export type DropdownItemType = {
  id: string
  text: string
}
type DropdownProps = {
  items: DropdownItemType[]
  size: number
  isOpen: boolean
  focusedIndex: number
  selectedIndex: number
  itemsRef: RefObject<HTMLLIElement[]>
}
type DropdownDispatchProps = {
  setItems: Dispatch<SetStateAction<DropdownItemType[]>>
  focusIndex: Dispatch<SetStateAction<number>>
  selectIndex: (index: number) => void
  toggle: (force?: boolean) => void
  handleKeyDown: (e: KeyboardEvent) => void
}

type KeyEventHandler = (
  event: KeyboardEvent,
  {
    focusIndex,
  }: Pick<DropdownProps, 'size' | 'focusedIndex'> &
    Pick<DropdownDispatchProps, 'focusIndex' | 'selectIndex' | 'toggle'>,
) => void

const KeyEventMap: Partial<Record<KeyboardEvent<Element>['key'], KeyEventHandler>> = {
  ArrowUp: (e, { size, focusIndex }) => {
    e.preventDefault()
    focusIndex(prev => (size + prev - 1) % size)
  },
  ArrowDown: (e, { size, focusIndex }) => {
    e.preventDefault()
    focusIndex(prev => (size + prev + 1) % size)
  },
  Enter: (e, { focusedIndex, selectIndex }) => {
    e.preventDefault()
    selectIndex(focusedIndex)
  },
  Escape: (e, { toggle }) => {
    toggle(false)
  },
}

const DropdownContext = createContext<DropdownProps>({
  items: [],
  size: 0,
  isOpen: false,
  focusedIndex: -1,
  selectedIndex: -1,
  itemsRef: { current: [] },
})
const DropdownDispatchContext = createContext<DropdownDispatchProps>({
  setItems: () => {},
  focusIndex: () => {},
  selectIndex: () => {},
  toggle: () => {},
  handleKeyDown: () => {},
})
const useDropdown = () => useContext(DropdownContext)
const useSetDropdown = () => useContext(DropdownDispatchContext)

const DropdownTrigger = () => {
  const { items, selectedIndex } = useDropdown()
  const { toggle } = useSetDropdown()
  const selectedItem = items[selectedIndex]

  return (
    <button className={cx('button-toggle')} onClick={() => toggle()}>
      <span className={cx('text')}>{selectedItem?.text || '항목을 선택하세요'}</span>
    </button>
  )
}

const DropdownItem = ({ item, index }: { item: DropdownItemType; index: number }) => {
  const { focusedIndex, selectedIndex, itemsRef } = useDropdown()
  const { selectIndex } = useSetDropdown()

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
        <span>{item.text}</span>
      </button>
    </li>
  )
}

const DropdownList = () => {
  const { items, isOpen } = useDropdown()
  if (!isOpen) return null

  return (
    <ul className={cx('DropdownList')}>
      {items.map((item, i) => (
        <DropdownItem item={item} index={i} key={item.id} />
      ))}
    </ul>
  )
}

const DropdownContainer = ({ children }: { children: ReactNode }) => {
  const { handleKeyDown } = useSetDropdown()

  return (
    <div className={cx('Dropdown')} onKeyDown={handleKeyDown} onClick={e => e.stopPropagation()}>
      {children}
    </div>
  )
}

const DropdownContextProvider = ({
  list,
  children,
}: {
  list: DropdownItemType[]
  children: ReactNode
}) => {
  const [items, setItems] = useState(list)
  const [isOpen, setIsOpen] = useState(false)
  const [focusedIndex, focusIndex] = useState(-1)
  const [selectedIndex, selectIndex] = useState(-1)
  const itemsRef = useRef<HTMLLIElement[]>([])
  const size = items.length

  const toggle = (force?: boolean) =>
    setIsOpen(prev => (typeof force === 'boolean' ? force : !prev))

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const { key } = event
      const handler = KeyEventMap[key]
      if (handler)
        handler(event, {
          size,
          focusedIndex,
          focusIndex,
          selectIndex,
          toggle,
        })
    },
    [size, focusedIndex, focusIndex, selectIndex, toggle],
  )

  useEffect(() => {
    const targetElem = itemsRef.current?.[focusedIndex]
    if (targetElem)
      targetElem.scrollIntoView({
        block: 'nearest',
      })
  }, [focusedIndex])

  useEffect(() => {
    const closeDropdown = () => toggle(false)
    if (isOpen) {
      window.addEventListener('click', closeDropdown, { once: true })
    }
    return () => {
      window.removeEventListener('click', closeDropdown)
    }
  }, [isOpen])

  return (
    <DropdownContext.Provider
      value={{
        items,
        size,
        isOpen,
        focusedIndex,
        selectedIndex,
        itemsRef,
      }}
    >
      <DropdownDispatchContext.Provider
        value={{
          setItems,
          toggle,
          focusIndex,
          selectIndex,
          handleKeyDown,
        }}
      >
        {children}
      </DropdownDispatchContext.Provider>
    </DropdownContext.Provider>
  )
}

const Dropdown = {
  Provider: DropdownContextProvider,
  Container: DropdownContainer,
  Trigger: DropdownTrigger,
  List: DropdownList,
  Item: DropdownItem,
}

export default Dropdown
