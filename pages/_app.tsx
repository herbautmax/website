import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Footer from '../components/sections/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#181b1f] via-[#22272a] to-[#191b1f] text-gray-100 font-sans transition-colors duration-300">
      <Head>
        <script
          async
          defer
          src={process.env.NEXT_PUBLIC_UMAMI_URL}
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
        />
      </Head>
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
      <SpeedInsights />
    </div>
  )
}
