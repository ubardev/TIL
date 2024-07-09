import { AnimationEvent, useEffect, useRef, useState } from 'react'
import cx from '../cx'
import { Snackbar } from './useSnackbar'

const SnackbarItem = ({ status, setStatus, children, onMouseEnter, onMouseLeave }: Snackbar) => {
  const elemRef = useRef<HTMLDivElement>(null)
  const [animationClassName, setAnimationClassName] = useState<string[]>([])

  const handleAnimationEnd = (e: AnimationEvent) => {
    if (elemRef.current?.className.includes('enter')) setAnimationClassName(['show'])
    else {
      setStatus(null)
    }
    // enter => show => show exit => 삭제
  }

  useEffect(() => {
    setAnimationClassName(status === 'open' ? ['enter'] : ['show', 'exit'])
  }, [status])

  return (
    <div
      ref={elemRef}
      className={cx('SnackbarItem', animationClassName)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  )
}

export default SnackbarItem
