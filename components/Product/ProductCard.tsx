import { raleway } from '@/app/fonts'
import { Heart, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ProductCard = () => {
  return (
    <div className='w-full min-[700px]:w-[300px] cursor-pointer space-y-2 flex flex-col justify-between rounded-lg min-[700px]:hover:ring-2 ring-offset-8 ring-slate-500'>
      <div className='relative aspect-square w-full max-h-[300px] min-[700px]:w-[300px] min-[700px]:h-[300px]'>
        <Image
          priority 
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          src={"https://booking-app-bautista-onorato.s3.sa-east-1.amazonaws.com/Products/CasanovaResidence/4.jpg"} 
          fill 
          alt='' 
          className='aspect-square object-cover rounded-lg'
        />
        <Heart size={24} fill='white' className='z-10 absolute text-white top-2 right-2 hover:scale-110' />
      </div>
      <div>
        <div className={`flex justify-between`}>
          <h4 className={`font-semibold ${raleway.className}`}>Llao Llao Resort, Golf-Spa</h4>
          <p className='flex items-center gap-1 justify-end'><Star className='text-black' size={16} /> <span className='text-sm'>4.5</span></p>
        </div>
        <p className='text-sm text-muted-foreground'>Bariloche, Argentina</p>
      </div>
    </div>
  )
}

export default ProductCard