import Header from '@/components/Navbar/Header'
import { AlertCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <Header />
      <div className='text-center flex flex-col mt-10 items-center space-y-2 px-4'>
        <AlertCircle size={56} className='text-primary-color' />
        <h2 className="text-3xl font-bold text-primary-color">404 Page Not Found.</h2>
        <p>We could not find the page you were looking for.</p>
        <p>Go back to the <Link href="/" className='text-primary-color font-bold underline'>home page</Link>.</p>
      </div>
    </div>
  )
}

export default NotFound
