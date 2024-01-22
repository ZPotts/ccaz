import type { Metadata } from 'next'
import Head from "next/head"
import { Montserrat, Rye } from 'next/font/google'

import './globals.css'
import Navbar from "./components/navbar/Navbar"
import Header from './components/header/Header'
import Banner from './components/Banner'

const montserrat = Montserrat({ 
  weight: ['200', '400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const rye = Rye({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rye',
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
      <body className={`${montserrat.variable} ${rye.variable}`}>
        {/* HEADER */}
        <Header />
        {/* BANNER */}
        <Banner />
        {children}
      </body>
    </html>
  )
}
