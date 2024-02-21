

import type { Metadata } from 'next'
import { Inter, Montserrat, Manrope, Abel } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin'],
  display: 'swap'
})
const manrope = Manrope({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})
const abel = Abel({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

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
    <html lang="en" className=' scroll-smooth overflow-x-hidden'>
      <body className={`${montserrat.className}`}>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
