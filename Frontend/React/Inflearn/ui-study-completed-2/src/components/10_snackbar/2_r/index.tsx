import data from '../data'
import cx from '../cx'
import useSnackbar from './useSnackbar'

const ListItem = ({ id, name, index }: { id: string; name: string; index: number }) => {
  const { snackbar, open } = useSnackbar(
    <p>
      {index + 1}. {name} 스낵바 알림
    </p>,
  )

  return (
    <span className={cx('listItem')} id={id}>
      #{index + 1} <button onClick={open}>스낵바 띄우기</button>
      {snackbar}
    </span>
  )
}

const Snackbar2 = () => {
  return (
    <>
      <h2>스낵바</h2>
      <h3>
        #2. React<sub>createPortal</sub>
      </h3>
      {data.map((item, index) => (
        <ListItem {...item} key={item.id} index={index} />
      ))}
      <div id="snackbarRoot" className={cx('Snackbars')} />
    </>
  )
}

export default Snackbar2
