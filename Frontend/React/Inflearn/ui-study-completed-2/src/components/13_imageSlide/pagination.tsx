import classNames from 'classnames/bind'
import styles from './pagination.module.scss'
import { useMemo } from 'react'

const cx = classNames.bind(styles)

// 총 20개 페이지. 현재위치 6. 총 5개만 화면에 보여주자
// 3 4 5 6 7 8
// 4 5 6 7 8 9

const Pagination = ({
  totalPages,
  currentIndex,
  visibleCount,
  handleMove,
}: {
  totalPages: number
  currentIndex: number
  visibleCount?: number
  handleMove: (index: number) => void
}) => {
  const indexes = useMemo(() => Array.from({ length: totalPages }, (_, i) => i), [totalPages])
  const viewCount = Math.min(visibleCount || totalPages, totalPages)
  const halfCount = Math.floor(viewCount / 2)
  const visibleMin = Math.min(Math.max(0, currentIndex - halfCount), totalPages - viewCount)
  const visiblePages = indexes.slice(visibleMin, visibleMin + viewCount)

  return (
    <div className={cx('Pagination')}>
      <ul className={cx('pageList')}>
        {visiblePages.map((pageIndex, i) => (
          <li key={pageIndex} className={cx('page', { current: currentIndex === pageIndex })}>
            <button onClick={() => handleMove(pageIndex)}>{pageIndex + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
