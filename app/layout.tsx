import type { Metadata } from 'next'
import Head from "next/head"
import { Montserrat, Rye } from 'next/font/google'

import './globals.css'
import Navbar from "./components/navbar/Navbar"
import Header from './components/header/Header'
import Banner from './components/Banner'
import MediumCard from './components/MediumCard'

import { getStaticPaths } from 'next/dist/build/templates/pages'

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
        <Header />
        <Banner />

        <main className="max-w-7xl mx-auto px-8 sm:px-16">
          <section className="pt-6">
            <h2 className="text-4xl font-semibold pb-5">Welcome to the Compound</h2>

            {/* 
            {cardsData.map(({ img, title}) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
            */}
          </section>
        </main>
        {children}

      </body>
    </html>
  )
}

async function getData() {
  const res = await fetch('./json/thecompound.js')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}