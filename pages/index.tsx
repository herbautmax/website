import Navigation from '../components/Navigation'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Experiences from '../components/sections/Experiences'
import BlogPreview from '../components/sections/BlogPreview'
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'
import { getBlogPosts } from '../lib/notion'
import { Post } from '../types'
import { GetStaticProps } from 'next'

interface HomeProps {
  posts: Post[]
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const posts = await getBlogPosts()

  // Filtrer les posts sans cover si nécessaire
  const filteredPosts = posts.map(post => ({
    ...post,
    cover: post.cover || null // S'assurer que cover est toujours null si undefined
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
    <div className="bg-gradient-to-b from-[#181b1f] via-[#22272a] to-[#191b1f] min-h-screen text-gray-100 font-sans transition-colors duration-300">
      <Navigation />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <About />
        <Services />
        <Experiences />
        <BlogPreview posts={posts} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
