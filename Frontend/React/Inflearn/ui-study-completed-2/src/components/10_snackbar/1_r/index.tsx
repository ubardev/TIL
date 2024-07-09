import data from '../data'
import cx from '../cx'
import SnackbarContextProvider, { useSetSnackbar } from './snackbarContext'

const ListItem = ({ id, name, index }: { id: string; name: string; index: number }) => {
  const { createSnackbar } = useSetSnackbar()

  const handleClick = () => {
    createSnackbar(
      `snackbar_${id}`,
      <p>
        {index + 1}. {name} 스낵바 알림
      </p>,
    )
  }

  return (
    <span className={cx('listItem')} id={id}>
      #{index + 1} <button onClick={handleClick}>스낵바 띄우기</button>
    </span>
  )
}

const Snackbar1 = () => {
  return (
    <SnackbarContextProvider>
      <h2>스낵바</h2>
      <h3>
        #1. React<sub>context</sub>
      </h3>
      {data.map((item, index) => (
        <ListItem {...item} key={item.id} index={index} />
      ))}
    </SnackbarContextProvider>
  )
}

export default Snackbar1
