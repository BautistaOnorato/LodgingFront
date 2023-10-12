import Image from 'next/image'
import React from 'react'

const layout = ({ children } : { children: React.ReactNode }) => {
  return (
    <div className='min-h-[90vh] w-full flex items-start md:items-center justify-center md:m-0 mt-10'>
      <div className='w-full md:w-[80%] flex justify-center md:justify-between items-center gap-8'>
        <div className='w-[50%] hidden md:flex items-center'>  
          <div className='relative sm:w-[300px] md:w-[400px] aspect-square '>
            <Image src="/auth-world.png" alt='hola' fill className='aspect-square object-contain'/>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default layout