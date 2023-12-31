"use client"

import { raleway } from '@/app/fonts'
import { useUser } from '@/hooks/useUser'
import { Image as ImageType } from '@/lib/types'
import { cn } from '@/lib/utils'
import { Heart, Star } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useToast } from '../ui/use-toast'

export interface ProductCardProps {
  identifier: number
  image: ImageType
  title: string
  rating: number
  location: string
  reservation?: {
    initialDate: string
    finalDate: string
  }
}

const ProductCard: React.FC<ProductCardProps> = ({ identifier, image, title, rating, location, reservation }) => {
  const router = useRouter()
  const { user, handleFavourites } = useUser()
  const { toast } = useToast()
  const [favourite, setFavourite] = useState(false)

  const handleFavourite = async () => {
    const res = await handleFavourites(identifier)
    if (typeof res === "number") {
      toast({
        title: "Oops! Something went wrong.",
        description: "The action could not be done. Try again later."
      })
      return
    }

    if (res.includes("removed")) {
      toast({
        description: "The product was removed from favourites."
      })
      setFavourite(false)
    } else if (res.includes("added")) {
      toast({
        description: "The product was added to favourites."
      })
      setFavourite(true)
    }
  }

  useEffect(() => {
    if (!user) return
    setFavourite(user.user.favouriteProducts.some(favourite => favourite.productId === identifier))
  }, [user, identifier])

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
            blurDataURL='data:image/jpeg;base64,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'
            placeholder='blur'
          />
        </div>
        <div>
          <div className={`flex justify-between`}>
            <h4 className={`font-semibold ${raleway.className}`}>{title}</h4>
            <p className='flex items-center gap-1 justify-end'><Star className='text-black' size={16} /> <span className='text-sm'>{rating}</span></p>
          </div>
          <p className='text-sm text-muted-foreground'>{location}</p>
          {
            reservation && (
              <div>
                <p><strong>Arrival:</strong> {reservation.initialDate}</p>
                <p><strong>Departure:</strong> {reservation.finalDate}</p>
              </div>
            )
          }
        </div>
      </div>
      {
        !reservation && (
          <Heart 
            size={24} 
            strokeWidth={1.5} 
            onClick={() => handleFavourite()}
            className={cn(
              'z-10 absolute fill-[#252525d3] hover:fill-[#ff0000d3] text-white top-2 right-2 hover:scale-110 transition',
              !favourite ? "fill-[#252525d3]" : "fill-[#ff0000d3]"
            )} 
          />
        )
      }
    </div>
  )
}

export default ProductCard