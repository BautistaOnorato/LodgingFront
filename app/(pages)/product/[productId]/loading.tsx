import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const loading = () => {
  return (
    <div className='pb-6 space-y-4'>
      <section className="sm:w-full bg-secondary-color px-8 py-4 flex justify-between items-center">
        <div className="mr-10 w-full space-y-2">
          <Skeleton className='md:w-[50%] max-w-[300px] h-8 rounded-lg bg-slate-700'/>
          <Skeleton className='md:w-[50%] max-w-[300px] h-6 rounded-lg bg-slate-700'/>
        </div>
        <div >
          <Skeleton className='h-8 rounded-lg bg-slate-700 w-10' />
        </div>
      </section>
      <section className="sm:w-full px-8 py-4 sm:hidden block justify-between items-center">
        <Skeleton className=' w-full h-[60vh]' />
      </section>
      <section className="px-8 w-full hidden sm:grid grid-cols-4 grid-rows-2 gap-2 h-[500px] [&>*:first-child]:row-span-2 [&>*:first-child]:col-span-2">
        <Skeleton className='w-full h-full' />
        <Skeleton className='w-full h-full' />
        <Skeleton className='w-full h-full' />
        <Skeleton className='w-full h-full' />
        <Skeleton className='w-full h-full' />
      </section>
    </div>
  )
}

export default loading