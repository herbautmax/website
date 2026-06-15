import Head from 'next/head'
import Navigation from '../components/Navigation'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Testimonials from '../components/sections/Testimonials'
import Experiences from '../components/sections/Experiences'
import BlogPreview from '../components/sections/BlogPreview'
import Contact from '../components/sections/Contact'
import { getBlogPosts } from '../lib/notion'
import { Post } from '../types'
import { GetStaticProps } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

interface HomeProps {
  posts: Post[]
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const posts = await getBlogPosts()

  const filteredPosts = posts.map(post => ({
    ...post,
    cover: post.cover || null 
  }))

  return {
    props: {
      posts: filteredPosts
    },
    revalidate: 86400,
  }
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Maxime Herbaut — Product Manager & Digital Builder</title>
        <meta
          name="description"
          content="Découvrez le profil de Maxime Herbaut, Product Manager à Lille : services, expériences et articles autour du produit et de l’innovation."
        />
        <meta property="og:title" content="Maxime Herbaut — Product Manager & Digital Builder" />
        <meta
          property="og:description"
          content="Product Manager à Lille : discovery, delivery, no-code & IA. Services, expériences et blog."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta property="og:site_name" content="Maxime Herbaut" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maxime Herbaut — Product Manager & Digital Builder" />
        <meta
          name="twitter:description"
          content="Product Manager à Lille : discovery, delivery, no-code & IA."
        />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
      </Head>
      <div className="min-h-screen bg-ink-950 font-sans text-fog">
        <Navigation />
        <main id="main-content" className="flex flex-col items-center w-full" tabIndex={-1}>
          <Hero />
          <About />
          <Services />
          <Testimonials />
          <Experiences />
          <BlogPreview posts={posts} />
          <Contact />
        </main>
      </div>
    </>
  )
}
