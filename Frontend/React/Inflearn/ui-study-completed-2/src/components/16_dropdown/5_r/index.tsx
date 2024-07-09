import cx from '../cx'
import data from '../data'

const Dropdown5 = () => {
  return (
    <>
      <h3>#5. HTML select</h3>
      <select name="dropdown5" className={cx('selectbox')}>
        {data.map(({ id, text }) => (
          <option value={text} key={id}>
            {text}
          </option>
        ))}
      </select>
      <p>-</p>
      <p>-</p>
      <p>-</p>
      <p>-</p>
      <p>-</p>
      <p>-</p>
      <p>-</p>
      <p>-</p>
      <p>-</p>
      <p>-</p>
      <p>-</p>
      <p>-</p>
      <p>-</p>
      <p>-</p>
      <p>-</p>
      <p>-</p>
      <p>-</p>
    </>
  )
}

export default Dropdown5
