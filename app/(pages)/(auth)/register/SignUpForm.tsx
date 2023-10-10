"use client"

import { ClosedEyeIcon, EyeIcon } from '@/app/components/icons/icons'
import Button from '@/app/components/ui/Button'
import { useState } from 'react'

const SignUpForm = () => {
  const [eyeOpen, setEyeOpen] = useState(false);

  return (
    <form className='flex flex-col gap-4'>
      <input type="text" placeholder='Enter your email address' className='border border-gray rounded-sm py-2 px-2 text-sm' />
      <div className='flex items-center gap-2'>
        <input type="text" placeholder='Enter your first name' className='w-[50%] border border-gray rounded-sm py-2 px-2 text-sm' />
        <input type="text" placeholder='Enter your last name' className='w-[50%] border border-gray rounded-sm py-2 px-2 text-sm' />
      </div>
      <input type="text" placeholder='Enter your phone' className='border border-gray rounded-sm py-2 px-2 text-sm' />
      <div className='relative w-full flex items-center justify-end'>
        <input type={eyeOpen ? "text" : "password"} placeholder='Enter your password' className='w-full border border-gray rounded-sm py-2 px-2 text-sm' />
        {
          eyeOpen ? 
            <EyeIcon onClick={() => setEyeOpen(false)} classname='w-8 absolute pr-2 cursor-pointer opacity-70'/> : 
            <ClosedEyeIcon onClick={() => setEyeOpen(true)} classname='w-8 absolute pr-2 cursor-pointer opacity-70'/>
        }
      </div>
      <div className='relative w-full flex items-center justify-end'>
        <input type={eyeOpen ? "text" : "password"} placeholder='Confirm your password' className='w-full border border-gray rounded-sm py-2 px-2 text-sm' />
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

export default SignUpForm