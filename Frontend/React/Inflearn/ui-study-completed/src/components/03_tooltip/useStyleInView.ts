import { useViewportRect } from '@/context/viewportContext'
import { RefObject, useLayoutEffect, useState } from 'react'

type PositionKey = 'left' | 'right' | 'top' | 'bottom'
type Position = Partial<Record<PositionKey, string | number>>
type Style = Partial<Record<'left' | 'right' | 'top' | 'bottom', number>>

const useStyleInView = (
  wrapperRef: RefObject<HTMLElement>,
  targetRef: RefObject<HTMLElement>,
  position: Position,
  positionType: 'absolute' | 'relative' = 'relative',
  needUpdate: boolean = true,
) => {
  const viewportRect = useViewportRect()
  const [style, setStyle] = useState<Style>({})

  useLayoutEffect(() => {
    if (!needUpdate || !wrapperRef.current || !targetRef.current) return
    const wrapperRect = wrapperRef.current.getBoundingClientRect()
    const targetRect = targetRef.current.getBoundingClientRect()

    // "기준값". top은 top을 기준으로 아래로 보여주기. bototm은 위로 보여주기.
    const verticalKey =
      wrapperRect.bottom + targetRect.height < viewportRect.height ? 'top' : 'bottom'
    const horizontalKey =
      wrapperRect.right + targetRect.width < viewportRect.width ? 'left' : 'right'

    /* console.log({
      horizontalKey,
      wrapperRight: wrapperRect.right,
      targetWidth: targetRect.width,
      viewportWidth: viewportRect.width,
    }) */

    if (positionType === 'absolute') {
      const absoluteTop = -viewportRect.top + wrapperRect.top

      setStyle({
        [verticalKey]:
          verticalKey === 'top'
            ? absoluteTop + wrapperRect.height + +(position.top || 0)
            : viewportRect.height - absoluteTop + +(position.bottom || 0),
        [verticalKey === 'top' ? 'bottom' : 'top']: 'auto',
        [horizontalKey]:
          horizontalKey === 'left'
            ? wrapperRect.left - +(position.left || 0)
            : viewportRect.width - wrapperRect.right + +(position.right || 0),
        [horizontalKey === 'left' ? 'right' : 'left']: 'auto',
      })
    } else {
      /* relative이던 기존방식:  */
      setStyle({
        [verticalKey]: position[verticalKey] || 0,
        [verticalKey === 'top' ? 'bottom' : 'top']: 'auto',
        [horizontalKey]: position[horizontalKey] || 0,
        [horizontalKey === 'left' ? 'right' : 'left']: 'auto',
      })
    }
  }, [viewportRect, wrapperRef, targetRef, position, needUpdate])

  return style
}

export default useStyleInView
