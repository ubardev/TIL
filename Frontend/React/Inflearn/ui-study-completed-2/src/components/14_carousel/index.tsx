import Carousel1V from './1_v'
import Carousel2 from './2_r'
import Carousel3 from './3_r'
import cx from './cx'

const Carousel = () => {
  return (
    <div className={cx('Carousels')}>
      <h2>캐러셀</h2>
      <Carousel1V />
      <Carousel2 />
      <Carousel3 />
    </div>
  )
}

export default Carousel
