import { useRef, useEffect } from 'react'
import cx from './cx'

const TextBox3 = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const cloneRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const elem = textareaRef.current
    const cloneElem = cloneRef.current
    const handleInput = () => {
      if (!elem || !cloneElem) return
      const val = elem.value
      cloneElem.value = val
      elem.rows = Math.min(
        Math.max(Math.floor(cloneElem.scrollHeight / cloneElem.clientHeight), 3),
        15,
      ) // 최소3줄 최대15줄
    }
    if (elem) elem.addEventListener('input', handleInput)

    return () => {
      if (elem) elem.removeEventListener('input', handleInput)
    }
  }, [])

  return (
    <>
      <h3>
        #3. React<sub>uncontrolled. clone elem</sub>
      </h3>
      <div className={cx('container')}>
        <textarea className={cx('clone')} ref={cloneRef} rows={1} readOnly />
        <textarea className={cx('textarea')} ref={textareaRef} rows={3} />
      </div>
    </>
  )
}
export default TextBox3
