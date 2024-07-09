import ImageSlide1V from './1_v'
import ImageSlide2R from './2_r'
import ImageSlide3R from './3_r'
import ImageSlide4R from './4_r'
import cx from './cx'

const ImageSlide = () => {
  return (
    <div className={cx('ImageSlides')}>
      <h2>이미지 슬라이드</h2>
      <ImageSlide1V />
      <ImageSlide2R />
      <ImageSlide3R />
      <ImageSlide4R />
    </div>
  )
}

export default ImageSlide
