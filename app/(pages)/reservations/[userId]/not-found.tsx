import { AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="text-center w-full flex flex-col items-center mt-10 space-y-2 px-4">
      <AlertCircle size={56} className='text-primary-color' />
      <h2 className="text-3xl font-bold text-primary-color">We Hit a Brick Wall.</h2>
      <p>We could not find the page you were looking for.</p>
      <p>Go back to the <Link href="/" className='text-primary-color font-bold underline'>home page</Link>.</p>
    </main>
  )
}

