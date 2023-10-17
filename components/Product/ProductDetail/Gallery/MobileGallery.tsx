"use client"

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { PhotosContainerProps } from './PhotosContainer'

const MobileGallery: React.FC<PhotosContainerProps> = ({ images }) => {
  return (
    <div className="block sm:hidden w-[90%] mx-auto h-[300px]">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-full rounded-sm"
      >
        {
          images.map(image => (
            <SwiperSlide key={image.id} className="relative w-full h-full rounded-sm">
              <Image priority src={image.url} alt={image.title} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' fill className="aspect-square object-cover" />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default MobileGallery