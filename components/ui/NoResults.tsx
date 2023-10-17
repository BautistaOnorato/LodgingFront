import { AlertCircle } from 'lucide-react'
import React from 'react'

const NoResults = ({ title } : { title: string }) => {
  return (
    <div className='w-[100%] flex items-center justify-center flex-col gap-6'>
      <AlertCircle size={56} className='text-primary-color' />
      <p className='text-lg text-center w-[90%] md:w-[50%]'>{title}</p>
    </div>
  )
}

export default NoResults