import cx from './cx'
import data from './data'

const AccordionItem = ({
  id,
  title,
  description,
  initialChecked,
}: {
  id: string
  title: string
  description: string
  initialChecked: boolean
}) => {
  return (
    <li className={cx('item', 'item5')} key={id}>
      <input
        className={cx('input')}
        type="radio"
        name="accordion"
        id={id}
        defaultChecked={initialChecked}
      />
      <label htmlFor={id} className={cx('tab')}>
        {title}
      </label>
      <div className={cx('description')}>{description}</div>
    </li>
  )
}

const Accordion5 = () => {
  return (
    <>
      <h3>
        #5. React<sub>html input(radio)로 처리</sub>
      </h3>
      <ul className={cx('container')}>
        {data.map((d, i) => (
          <AccordionItem {...d} key={d.id} initialChecked={i === 0} />
        ))}
      </ul>
    </>
  )
}

export default Accordion5
