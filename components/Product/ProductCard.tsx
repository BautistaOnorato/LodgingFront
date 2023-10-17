"use client"

import { raleway } from '@/app/fonts'
import { Image as ImageType } from '@/lib/types'
import { Heart, Star } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export interface ProductCardProps {
  identifier: number
  image: ImageType
  title: string
  rating: number,
  location: string
}

const ProductCard: React.FC<ProductCardProps> = ({ identifier, image, title, rating, location }) => {
  const router = useRouter()
  return (
    <div className='w-full min-[700px]:w-[300px] cursor-pointer rounded-lg relative'>
      <div className='w-full space-y-2 flex flex-col justify-between' onClick={() => router.push(`/product/${identifier}`)}>
        <div className='relative aspect-square w-full max-h-[300px] min-[700px]:w-[300px] min-[700px]:h-[300px]'>
          <Image
            priority 
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            src={image.url} 
            fill 
            alt={image.title}
            className='aspect-square object-cover rounded-lg'
            
          />
        </div>
        <div>
          <div className={`flex justify-between`}>
            <h4 className={`font-semibold ${raleway.className}`}>{title}</h4>
            <p className='flex items-center gap-1 justify-end'><Star className='text-black' size={16} /> <span className='text-sm'>{rating}</span></p>
          </div>
          <p className='text-sm text-muted-foreground'>{location}</p>
        </div>
      </div>
      <Heart size={24} strokeWidth={1.5} className='z-10 absolute fill-[#252525d3] hover:fill-[#ff0000d3] text-white top-2 right-2 hover:scale-110 transition' />
    </div>
  )
}

export default ProductCard