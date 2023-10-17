"use client"

import { Swiper as SwiperType } from "swiper" 
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Image as ImageType } from "@/lib/types";


export interface DesktopCarouselProps {
  images: ImageType[]
  handleClose: () => void
}

const DesktopCarousel: React.FC<DesktopCarouselProps> = ({ images, handleClose }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>()

  return (
    <div className="top-0 fixed w-[100%] h-screen bg-[#252525ba] z-50 flex items-center flex-col justify-center gap-4">
      <X size={48} className="top-2 right-2 absolute text-white cursor-pointer" onClick={handleClose} />
      <div className="w-[70%] h-[70%] relative">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="px-8 w-full h-full relative"
        >
          {
            images.map(image => (
              <SwiperSlide key={image.id} className="relative w-full h-full">
                <Image sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' alt={image.title} src={image.url} fill className="aspect-square object-cover rounded-md"/>
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="swiper-button-prev"/>
        <div className="swiper-button-next"/>
      </div>
      <Swiper
        onSwiper={setThumbsSwiper}
        watchSlidesProgress={true}
        slidesPerView={4}
        spaceBetween={10}
        freeMode={true}
        modules={[Navigation, Thumbs, FreeMode]}
        className="flex gap-4 w-[70%] h-[100px] relative"
      >
        {
          images.map(image => (
            <SwiperSlide key={image.id} className="relative w-full h-full">
              <Image sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' alt={image.title} src={image.url} fill className="aspect-square object-cover rounded-md cursor-pointer"/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default DesktopCarousel

