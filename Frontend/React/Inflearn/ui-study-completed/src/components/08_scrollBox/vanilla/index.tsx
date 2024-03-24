import VanillaWrapper from '../../vanillaWrapper'
import vanillaScrollBox from './scrollBox'

const initiator = (wrapper: HTMLDivElement) => {
  const $scrollBox = vanillaScrollBox()
  wrapper.append($scrollBox)
}

const ScrollBox_Vanilla = () => <VanillaWrapper title="#2" initiator={initiator} />

export default ScrollBox_Vanilla
