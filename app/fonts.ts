import { Roboto, Raleway } from 'next/font/google'

export const raleway = Raleway({ subsets: ['latin'] })
export const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin']
})