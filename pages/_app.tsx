// pages/_app.tsx
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/sections/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#181b1f] via-[#22272a] to-[#191b1f] text-gray-100 font-sans transition-colors duration-300">
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
