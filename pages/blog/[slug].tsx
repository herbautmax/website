import { useState, useEffect } from "react";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import Link from "next/link";
import { getBlogPosts, getPostBySlug } from "../../lib/notion";
import { Post } from "../../types";
import { GetStaticPropsContext } from 'next';
import { formatDateFR } from "../../lib/formatDate";
import TagLabel from "../../components/TagLabel";
import BlogMiniHeader from "@/components/BlogMiniHeader";
import BlogHead from "@/components/BlogHead";

export async function getStaticPaths() {
  const posts = await getBlogPosts();
  return {
    paths: posts.map(post => ({ params: { slug: post.slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const params = context.params;
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  if (!slug) return { notFound: true };

  const post = await getPostBySlug(slug);
  if (!post) return { notFound: true };

  const notionId = post.id.replace(/-/g, "");
  const notion = new (await import("notion-client")).NotionAPI();
  const recordMap = await notion.getPage(notionId);

  return {
    props: { post, recordMap },
    revalidate: 86400,
  };
}

interface BlogPostProps {
  post: Post;
  recordMap: any;
}

export default function BlogPost({ post, recordMap }: BlogPostProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowScrollTop(window.pageYOffset > 300);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-[#181b1f] text-gray-100 font-sans relative">
      <BlogHead post={post} />
      <BlogMiniHeader variant="articles" />
      <div className="max-w-3xl mx-auto py-10 px-4 pt-20">
        <h1 className="text-4xl sm:text-5xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#10b981] via-white to-[#6366f1] drop-shadow-xl tracking-tight">
          {post.title}
        </h1>
        <p className="text-sm text-gray-400 mb-2">{formatDateFR(post.date)}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags?.map(tag => (
            <TagLabel key={tag} tag={tag} />
          ))}
        </div>
        <div className="notion-content">
          <NotionRenderer recordMap={recordMap} darkMode />
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Retour en haut de la page"
          className="fixed bottom-8 right-8 bg-[#10b981] hover:bg-[#0e9b73] text-white p-3 rounded-full shadow-lg transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#10b981]"
          title="Retour en haut"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
