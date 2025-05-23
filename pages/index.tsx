import Navigation from "../components/Navigation";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Experiences from "../components/sections/Experiences";
import BlogPreview from "../components/sections/BlogPreview";
import Contact from "../components/sections/Contact";
import { getBlogPosts } from "../lib/notion";
import { Post } from "../types";

type HomeProps = {
  posts: Post[];
};

export async function getServerSideProps() {
  const posts = await getBlogPosts();
  return { props: { posts } };
}

export default function Home({ posts }: HomeProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Navigation />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4">
        <About />
        <Services />
        <Experiences />
        <BlogPreview posts={posts} />
        <Contact />
      </main>
      <footer className="border-t mt-16 py-8 text-center text-gray-400 text-sm">
        <div className="max-w-5xl mx-auto px-4">
          Maxime Herbaut © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}