import { SyntheticEvent, useEffect, useState } from 'react'
import cx from './cx'
import data from './data'

const Tooltip = ({
  id,
  title,
  description,
}: {
  id: string
  title: string
  description: string
}) => {
  const [isOpen, toggle] = useState(false)

  const handleClick = (e: SyntheticEvent) => {
    e.stopPropagation()
    toggle(p => !p)
  }

  useEffect(() => {
    const close = () => toggle(false)
    if (isOpen) {
      window.addEventListener('click', close)
    }
    return () => {
      window.removeEventListener('click', close)
    }
  }, [isOpen])

  return (
    <div className={cx('container')}>
      <button className={cx('trigger')} onClick={handleClick}>
        {title}
      </button>
      {isOpen && (
        <div className={cx('tooltip')} onClick={e => e.stopPropagation()}>
          {description}
        </div>
      )}
    </div>
  )
}

const Tooltip1 = () => {
  return (
    <>
      <h3>
        #1. React<sub>외부 클릭시 닫히도록 처리</sub>
      </h3>
      {data.map(d => (
        <Tooltip {...d} key={d.id} />
      ))}
    </>
  )
}

export default Tooltip1
