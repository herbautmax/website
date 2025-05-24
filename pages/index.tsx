import Navigation from '../components/Navigation'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Experiences from '../components/sections/Experiences'
import BlogPreview from '../components/sections/BlogPreview'
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'
import { getBlogPosts } from '../lib/notion'

export async function getServerSideProps() {
  const posts = await getBlogPosts()
  return { props: { posts } }
}

export default function Home({ posts }) {
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
