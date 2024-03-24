import { useState } from 'react'
import cx from './cx'
import data from './data'

const TabItem = ({
  id,
  title,
  description,
  current,
  toggle,
}: {
  id: string
  title: string
  description: string
  current: boolean
  toggle: () => void
}) => {
  return (
    <li className={cx('item', { current })} key={id}>
      <div className={cx('tab')} onClick={toggle}>
        {title}
      </div>
      <div className={cx('description')}>{description}</div>
    </li>
  )
}

const TabMenu3 = () => {
  const [currentId, setCurrentId] = useState<string>(data[0].id)

  const toggleItem = (id: string) => () => {
    setCurrentId(id)
  }
  return (
    <>
      <h3>
        #3. React<sub>한 li 안에 title/desc 모두 있게 처리</sub>
      </h3>
      <ul className={cx('container', 'tabMenu3')}>
        {data.map((d) => (
          <TabItem
            {...d}
            key={d.id}
            current={currentId === d.id}
            toggle={toggleItem(d.id)}
          />
        ))}
      </ul>
    </>
  )
}

export default TabMenu3
