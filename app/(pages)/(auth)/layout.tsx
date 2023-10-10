import Image from 'next/image'
import React from 'react'

const layout = ({ children } : { children: React.ReactNode }) => {
  return (
    <div className='min-h-[90vh] w-full flex items-center justify-center'>
      <div className='w-[80%] flex justify-between items-center'>
        <div className='w-full'>  
          <div className='relative w-[60%] aspect-square '>
            <Image src="/auth-world.png" alt='hola' fill className='aspect-square object-contain'/>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default layout