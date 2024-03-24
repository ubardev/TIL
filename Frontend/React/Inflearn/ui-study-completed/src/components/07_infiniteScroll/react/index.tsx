import cx from '../cx'
import { Datum } from './useInfiniteFetcher'
import useInfiniteScroll from './useInfiniteScroll'

const ListItem = ({ id, number, title, description }: Datum & { number: number }) => {
  return (
    <li>
      <p>
        <strong>
          {number}. {title}
        </strong>
      </p>
      <div>{description}</div>
    </li>
  )
}

const InfiniteScrollR = () => {
  const { data, state, moreRef } = useInfiniteScroll()

  return (
    <>
      <h2>무한스크롤</h2>
      <h3>#1. React</h3>
      <ul>
        {data.map((page, i) =>
          page.map((item, j) => <ListItem {...item} number={i * 20 + j + 1} key={`${i}_${j}`} />),
        )}
      </ul>
      <div id="fetchMore" ref={moreRef} />
      {state === 'loading' && <div className={cx('spinner')} />}
    </>
  )
}

export default InfiniteScrollR
