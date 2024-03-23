import ScrollBox from './scrollBox'
import data from '../data'
import { useRef } from 'react'
import { LazyImage } from '@/components/06_lazyLoading/1_r'

export const Item = ({
  id,
  description,
  imgUrl,
}: {
  id: string
  description: string
  imgUrl: string
}) => (
  <div>
    <LazyImage src={imgUrl} width={250} height={400} />
    <span>{description}</span>
  </div>
)

const ScrollBox_React = () => {
  const ref = useRef()
  return (
    <>
      <h3>#1. React</h3>
      <ScrollBox list={data} Item={Item} ref={ref} />
    </>
  )
}
export default ScrollBox_React
