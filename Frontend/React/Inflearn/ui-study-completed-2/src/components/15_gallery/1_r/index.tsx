import Modal from '@/components/11_modal/4_r/modal'
import Reviews, { Image } from './reviews'
import useModal from '@/components/11_modal/4_r/useModal'
import { Carousel } from '@/components/14_carousel/2_r'
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react'

export type GalleryProps = { galleryKey: string; images: Image[]; initialIndex: number }
export type SetGalleryData = Dispatch<SetStateAction<GalleryProps>>
const initialGalleryProps: GalleryProps = { galleryKey: '', images: [], initialIndex: 0 }

const GalleryModal = ({
  id,
  images,
  initialIndex = 0,
  setGalleryData,
}: {
  id: string
  images: Image[]
  initialIndex: number
  setGalleryData: SetGalleryData
}) => {
  const { modalRef, openModal, closeModal } = useModal()
  const fullImages = useMemo(() => images.map(({ fullsize }) => fullsize), [images])

  const onClose = () => {
    setGalleryData(initialGalleryProps)
  }

  useEffect(() => {
    if (images.length) openModal()
  }, [images])

  return (
    <Modal modalRef={modalRef} hide={closeModal} onClose={onClose} hideOnClickOutside>
      <Modal.Content>
        <Carousel images={fullImages} initialIndex={initialIndex} />
      </Modal.Content>
    </Modal>
  )
}

const Gallery1 = () => {
  const [galleryData, setGalleryData] = useState<GalleryProps>(initialGalleryProps)
  return (
    <>
      <h2>Gallery #1 - Carousel</h2>
      <Reviews setGalleryData={setGalleryData} />
      <GalleryModal id={galleryData.galleryKey} {...galleryData} setGalleryData={setGalleryData} />
    </>
  )
}

export default Gallery1
