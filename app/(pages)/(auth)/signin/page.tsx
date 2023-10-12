import { raleway } from '@/app/fonts'
import React from 'react'
import SignInForm from './SignInForm'

const page = () => {
  return (
    <div className='w-full px-5 flex flex-col gap-6'>
      <h2 className={`${raleway.className} font-semibold text-2xl`}>Sign in</h2>
      <SignInForm />
      <span className='text-sm text-gray-500'>Don&apos;t have an account <a href="/register" className='text-custom-blue font-bold'>Sign up</a></span>
    </div>
  )
}

export default page