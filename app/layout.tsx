import type { Metadata } from 'next'
import Head from "next/head"
import { Montserrat } from 'next/font/google'

import './globals.css'
import Navbar from "./components/navbar/Navbar"
import Header from './components/header/Header'

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
        <Head>
          <title>Carefree Compound, Arizona</title>
        </Head>
      <body className={montserrat.className}>
        {/* HEADER */}
        <Header />
        {/* BANNER */}
        {children}
      </body>
    </html>
  )
}
