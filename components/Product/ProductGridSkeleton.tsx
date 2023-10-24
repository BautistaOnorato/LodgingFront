import React from 'react'
import { Skeleton } from '../ui/skeleton'

const ProductGridSkeleton = () => {
  return (
    <div className='grid min-[700px]:grid-cols-2 min-[1020px]:grid-cols-3 xl:grid-cols-4 gap-4 w-full place-items-center'>
      <Skeleton className='w-full min-[700px]:w-[300px] rounded-lg h-[300px]' />
      <Skeleton className='w-full min-[700px]:w-[300px] rounded-lg h-[300px]' />
      <Skeleton className='w-full min-[700px]:w-[300px] rounded-lg h-[300px]' />
      <Skeleton className='w-full min-[700px]:w-[300px] rounded-lg h-[300px]' />
      <Skeleton className='w-full min-[700px]:w-[300px] rounded-lg h-[300px]' />
      <Skeleton className='w-full min-[700px]:w-[300px] rounded-lg h-[300px]' />
      <Skeleton className='w-full min-[700px]:w-[300px] rounded-lg h-[300px]' />
      <Skeleton className='w-full min-[700px]:w-[300px] rounded-lg h-[300px]' />
    </div>
  )
}

export default ProductGridSkeleton