import ViewportContextProvider from '@/context/viewportContext'
import cx from './cx'
import Autocomplete1 from './1_r'
import Autocomplete2 from './2_r'

const Autocompletes = () => (
  <div className={cx('AutoComplete')}>
    <ViewportContextProvider>
      <h2>자동완성</h2>
      <Autocomplete1 />
      <p>-</p>
      <p>-</p>
      <p>-</p>
      <p>-</p>
      <p>-</p>
      <p>-</p>
      <p>-</p>
      <p>-</p>
      <p>-</p>
      <Autocomplete2 />
      <p>-</p>
      <p>-</p>
      <p>-</p>
      <p>-</p>
      <p>-</p>
      <p>-</p>
      <p>-</p>

      <div id="popoverRoot" />
    </ViewportContextProvider>
  </div>
)

export default Autocompletes
