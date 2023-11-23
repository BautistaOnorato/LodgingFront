"use client"

import { useUser } from '@/hooks/useUser'
import { raleway } from '@/app/fonts'
import SignInForm from './SignInForm'
import { useRouter } from 'next/navigation'

const SignInPage = () => {
  const { user } = useUser()
  const router = useRouter()

  if (user === false) {
    return null
  }

  if (user) {
    return router.replace("/")
  }


  return (
    <div className='w-full px-5 flex flex-col gap-6'>
      <h2 className={`${raleway.className} font-semibold text-2xl`}>Sign in</h2>
      <SignInForm />
      <span className='text-sm text-gray-500'>Don&apos;t have an account <a href="/register" className='text-custom-blue font-bold'>Sign up</a></span>
    </div>
  )
}

export default SignInPage