import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import Script from 'next/script'
import Footer from '../components/sections/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next'

const umamiUrl = process.env.NEXT_PUBLIC_UMAMI_URL
const umamiId = process.env.NEXT_PUBLIC_UMAMI_ID

export default function App({ Component, pageProps }: AppProps) {
  // Vue print (CV en PDF via ?print=1) : fond blanc, pas de footer ni d'analytics.
  const [isPrint, setIsPrint] = useState(false)
  useEffect(() => {
    setIsPrint(new URLSearchParams(window.location.search).get('print') === '1')
  }, [])

  if (isPrint) {
    return (
      <div className="min-h-screen bg-white">
        <a href="#main-content" className="skip-link">Aller au contenu principal</a>
        <Component {...pageProps} />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-ink font-sans text-fog">
      {umamiUrl && umamiId && (
        <Script
          src={umamiUrl}
          data-website-id={umamiId}
          strategy="afterInteractive"
        />
      )}
      <a href="#main-content" className="skip-link">Aller au contenu principal</a>
      <div className="flex-grow">
        <Component {...pageProps} />
      </div>
      <Footer />
      <SpeedInsights />
    </div>
  )
}
