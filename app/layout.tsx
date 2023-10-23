
import { UserProvider } from '@/context/user'
import { roboto } from './fonts'
import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <UserProvider>
          {children}
        </UserProvider>
        <Toaster />
      </body>
    </html>
  )
}
