import type { Metadata } from 'next'
import Head from 'next/head'
import { Montserrat, Rye } from 'next/font/google'

import './globals.css'
import Header from './components/header/Header'
import Banner from './components/Banner'
import Teaser from './components/Teaser'
import MediumCardContainer from './components/MediumCardContainer'
import MapCardContainer from './components/MapCardContainer'
import InteriorCardContainer from './components/InteriorCardContainer'

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
          <title>Carefree Compound</title>
        </Head>
      <body className={`${montserrat.variable} ${rye.variable}`}>
        <Header />
        <Banner />

        <main className="max-w-7xl mx-auto px-8 sm:px-8 text-center">
          <section className="pt-6 pb-12">
            <Teaser /> 
            <MediumCardContainer />
            <MapCardContainer />
            <InteriorCardContainer />
          </section>
        </main>
   
      </body>
    </html>
  )
}