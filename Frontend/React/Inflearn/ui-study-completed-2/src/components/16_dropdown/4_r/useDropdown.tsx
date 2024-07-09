import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  RefObject,
} from 'react'

type DropdownProps<T> = {
  items: T[]
  size: number
  isOpen: boolean
  focusedIndex: number
  selectedIndex: number
  itemsRef: RefObject<HTMLLIElement[]>
}
type DropdownDispatchProps<T> = {
  setItems: Dispatch<SetStateAction<T[]>>
  focusIndex: Dispatch<SetStateAction<number>>
  selectIndex: (index: number) => void
  toggle: (force?: boolean) => void
  handleKeyDown: (e: KeyboardEvent) => void
}

type KeyEventHandler = <T>(
  event: KeyboardEvent,
  {
    focusIndex,
  }: Pick<DropdownProps<T>, 'size' | 'focusedIndex'> &
    Pick<DropdownDispatchProps<T>, 'focusIndex' | 'selectIndex' | 'toggle'>,
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

export type DropdownTriggerProps<T> = {
  selectedItem: T
  focusIndex: (index: number) => void
  selectIndex: (index: number) => void
  toggle: (force?: boolean) => void
}

export type DropdownItemProps<T> = {
  item: T
  index: number
  focusedIndex: number
  selectedIndex: number
  selectIndex: (index: number) => void
  itemsRef: RefObject<HTMLElement[]>
}
export type DropdownListProps = {
  isOpen: boolean
  containerRef: RefObject<HTMLDivElement>
  children: ReactNode
}
export type DropdownContainerProps = {
  handleKeyDown: (e: KeyboardEvent) => void
}

const useDropdown = <T,>(list: T[]) => {
  const [isOpen, setIsOpen] = useState(false)
  const [focusedIndex, focusIndex] = useState(-1)
  const [selectedIndex, selectIndex] = useState(-1)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLLIElement[]>([])
  const size = list.length

  const toggle = (force?: boolean) =>
    setIsOpen(prev => (typeof force === 'boolean' ? force : !prev))

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

  const getContainerProps = useCallback(
    () => ({
      containerRef,
      handleKeyDown: (event: KeyboardEvent) => {
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
    }),
    [size, focusedIndex, focusIndex, selectIndex, toggle],
  )

  const getTriggerProps = useCallback(
    () => ({
      selectedItem: list[selectedIndex],
      selectIndex,
      focusIndex,
      toggle,
    }),
    [selectedIndex, focusIndex, selectIndex, list, toggle],
  )

  const getListProps = useCallback(
    () => ({
      isOpen,
      list,
      containerRef,
    }),
    [isOpen, list],
  )

  const getItemProps = useCallback(
    (index: number) => ({
      index,
      item: list[index],
      focusedIndex,
      selectedIndex,
      selectIndex,
      itemsRef,
    }),
    [list, focusedIndex, selectedIndex, selectIndex, itemsRef],
  )

  return {
    isOpen,
    getContainerProps,
    getTriggerProps,
    getListProps,
    getItemProps,
  }
}

export default useDropdown
