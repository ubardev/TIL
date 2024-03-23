import TabMenu1 from './1_r'
import TabMenu2 from './2_r'
import TabMenu3 from './3_r'
import TabMenu4V from './4_v'
import TabMenu5 from './5_r'
import TabMenu6 from './6_r'
import cx from './cx'

const TabMenus = () => {
  return (
    <div className={cx('TabMenus')}>
      <h2>탭메뉴</h2>
      <TabMenu1 />
      <TabMenu2 />
      <TabMenu3 />
      <TabMenu4V />
      <TabMenu5 />
      <TabMenu6 />
    </div>
  )
}

export default TabMenus
