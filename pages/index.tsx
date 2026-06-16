import Head from 'next/head'
import Navigation from '../components/Navigation'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
// import Testimonials from '../components/sections/Testimonials' // pas de témoignages pour l'instant
import Experiences from '../components/sections/Experiences'
import BlogPreview from '../components/sections/BlogPreview'
import Contact from '../components/sections/Contact'
import { getBlogPosts } from '../lib/notion'
import { Post } from '../types'
import { GetStaticProps } from 'next'
import { content } from '../content/site'

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
        <title>{content.meta.home.title}</title>
        <meta name="description" content={content.meta.home.description} />
        <meta property="og:title" content={content.meta.home.title} />
        <meta property="og:description" content={content.meta.home.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta property="og:site_name" content={content.brand} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.meta.home.title} />
        <meta name="twitter:description" content={content.meta.home.twitterDescription} />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
      </Head>
      <div className="min-h-screen bg-ink font-sans text-fog">
        <Navigation />
        <main id="main-content" className="flex flex-col items-center w-full" tabIndex={-1}>
          <Hero />
          <About />
          <Services />
          {/* <Testimonials /> */}
          <Experiences />
          <BlogPreview posts={posts} />
          <Contact />
        </main>
      </div>
    </>
  )
}
