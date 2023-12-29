import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import './globals.css'
import Navbar from "./components/navbar/navbar"

const montserrat = Montserrat({ 
  weight: ['200', '400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Carefree Compound',
  description: 'Carefree Compound Arizona',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
