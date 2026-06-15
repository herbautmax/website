import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Footer from '../components/sections/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex min-h-screen flex-col bg-ink-950 font-sans text-fog">
      <Head>
        <script
          async
          defer
          src={process.env.NEXT_PUBLIC_UMAMI_URL}
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
        />
      </Head>
      <a href="#main-content" className="skip-link">Aller au contenu principal</a>
      <div className="flex-grow">
        <Component {...pageProps} />
      </div>
      <Footer />
      <SpeedInsights />
    </div>
  )
}
