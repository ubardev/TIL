import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import cx from './cx'

type TextBoxProps = {
  minRow: number
  maxRow: number
}

const TextBox = forwardRef(({ minRow, maxRow }: TextBoxProps, ref) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const cloneRef = useRef<HTMLTextAreaElement>(null)

  useImperativeHandle(
    ref,
    () => {
      return {
        getValue() {
          if (!textareaRef.current) return
          return textareaRef.current.value
        },
      }
    },
    [],
  )

  useEffect(() => {
    const elem = textareaRef.current
    const cloneElem = cloneRef.current
    const handleInput = () => {
      if (!elem || !cloneElem) return
      const val = elem.value
      cloneElem.value = val
      elem.rows = Math.min(
        Math.max(Math.ceil(cloneElem.scrollHeight / cloneElem.clientHeight), minRow),
        maxRow,
      )
    }
    if (elem) elem.addEventListener('input', handleInput)

    return () => {
      if (elem) elem.removeEventListener('input', handleInput)
    }
  }, [])

  return (
    <div className={cx('container')}>
      <textarea className={cx('clone')} ref={cloneRef} rows={1} readOnly />
      <textarea
        placeholder="텍스트를 입력하고 버튼을 클릭하면 아래에 입력한 텍스트가 등장합니다."
        className={cx('textarea')}
        ref={textareaRef}
        rows={minRow}
      />
    </div>
  )
})

const TextBox5 = () => {
  const ref = useRef<{ getValue: () => string }>(null)
  const [text, setText] = useState('')

  const handleClickSubmit = () => {
    if (!ref.current) return
    const textBoxValue = ref.current.getValue()
    setText(textBoxValue)
  }

  return (
    <>
      <h3>
        #5. React
        <sub>상위 컴포넌트에서 값 접근 (useImperativeHandle) - by 강민혜(@himyne)</sub>
      </h3>
      <TextBox minRow={4} maxRow={10} ref={ref} />
      <button type="button" onClick={handleClickSubmit}>
        제출
      </button>
      <p>{text}</p>
    </>
  )
}

export default TextBox5
