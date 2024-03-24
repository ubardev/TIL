import Tooltip1 from './1_r'
import Tooltip2 from './2_r'
import Tooltip3 from './3_r'
import Tooltip4 from './4_r'
import Tooltip5V from './5_v'
import cx from './cx'

const Tooltips = () => {
  return (
    <div className={cx('Tooltips')} style={{ marginBottom: 500 }}>
      <h2>툴팁</h2>
      <Tooltip1 />
      <Tooltip2 />
      <Tooltip3 />
      <Tooltip4 />
      <Tooltip5V />
    </div>
  )
}

export default Tooltips
