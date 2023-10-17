"use client"

import React, { useState } from 'react'
import { PhotosContainerProps } from './PhotosContainer'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import DesktopCarousel from './DesktopCarousel'

const DesktopPhotos: React.FC<PhotosContainerProps> = ({ images }) => {
  const [openGallery, setOpenGallery] = useState(false)

  const handleOpenGallery = () => {
    setOpenGallery(true)
    document.body.style.overflow = 'hidden';
  }

  const handleCloseGallery = () => {
    setOpenGallery(false)
    document.body.style.overflow = 'visible';
  }


  return (
    <div className='hidden sm:block'>
      <section className="px-8 w-full hidden sm:grid grid-cols-4 grid-rows-2 gap-2 h-[500px] [&>*:first-child]:row-span-2 [&>*:first-child]:col-span-2 relative">
        {
          images.map(image => (
            <div className="relative w-full h-full" key={image.id}>
              <Image priority src={image.url} alt="hola" sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' fill className="aspect-square object-cover rounded-sm" />
            </div>
          ))
        }
        <Button className="absolute bottom-2 right-10 font-bold text-sm cursor-pointer" onClick={handleOpenGallery}>More photos</Button>
      </section>
      {
        openGallery && (
          <DesktopCarousel images={images} handleClose={handleCloseGallery} />
        )
      }
    </div>
  )
}

export default DesktopPhotos