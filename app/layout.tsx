import type { Metadata } from 'next'
import Head from 'next/head'
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

  const cardsData = [
      {
        "img": "/images/photos/property/thehouse.png",
        "title": "Located on a 5-acre lot"
      },
      {
        "img": "/images/photos/property/rooftop.png",
        "title": "With views of the whole Valley"
      },
      {
        "img": "/images/photos/property/pool.png",
        "title": "Wake up with laps"
      },
      {
        "img": "/images/photos/property/golf.png",
        "title": "Or unwind on the green"
      },
      {
        "img": "/images/photos/property/formaldining.png",
        "title": "Host the most formal dinner"
      },
      {
        "img": "/images/photos/property/diningroom.png",
        "title": "Or sit down with your best friends"
      },
      {
        "img": "/images/photos/property/couchview.png",
        "title": "Relax with the city before you"
      },
      {
        "img": "/images/photos/property/entertainingroom.png",
        "title": "Piano player not included"
      },
      {
        "img": "/images/photos/property/pond.png",
        "title": "Your door opens to the koi pond"
      },
      {
        "img": "/images/photos/property/tennis.png",
        "title": "Challenge friends on the court"
      },
      {
        "img": "/images/photos/property/road.png",
        "title": "The possibilities are...endless"
      }
  ];

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
            <h2 className="text-4xl font-semibold pb-5 font-rye">Welcome to the Compound</h2>

            <div className="flex flex-wrap">
              {cardsData.map(({ img, title }) => (
                <MediumCard key={img} img={img} title={title} />
              ))}
            </div>
            
          </section>
        </main>
   

      </body>
    </html>
  )
}

/*
async function cardsData() {
  const res = await fetch('./json/thecompound.js')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
*/