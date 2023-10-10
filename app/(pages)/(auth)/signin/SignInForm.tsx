"use client"

import { ClosedEyeIcon, EyeIcon } from '@/app/components/icons/icons'
import Button from '@/app/components/ui/Button'
import React, { useState } from 'react'

const SignInForm = () => {
  const [eyeOpen, setEyeOpen] = useState(false);
  return (
    <form className='flex flex-col gap-4'>
      <input type="text" placeholder='Enter your email address' className='border border-gray rounded-sm py-3 px-2 text-sm' />
      <div className='relative w-full flex items-center justify-end'>
        <input type={eyeOpen ? "text" : "password"} placeholder='Enter your password' className='text-sm w-full border border-gray rounded-sm py-3 px-2' />
        {
          eyeOpen ? 
            <EyeIcon onClick={() => setEyeOpen(false)} classname='w-8 absolute pr-2 cursor-pointer opacity-70'/> : 
            <ClosedEyeIcon onClick={() => setEyeOpen(true)} classname='w-8 absolute pr-2 cursor-pointer opacity-70'/>
        }
      </div>
      <Button className='bg-primary-color py-2 text-white text-lg'>Continue</Button>
    </form>
  )
}

export default SignInForm