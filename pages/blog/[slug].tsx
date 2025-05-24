import { useState, useEffect } from "react";
import { NotionRenderer } from "react-notion-x";
import { NotionAPI } from "notion-client";
import "react-notion-x/src/styles.css";
import Head from "next/head";
import Link from "next/link";
import { getBlogPosts, getPostBySlug } from "../../lib/notion";
import { Post } from "../../types";

export async function getStaticPaths() {
  const posts = await getBlogPosts();
  return {
    paths: posts.map(post => ({ params: { slug: post.slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return { notFound: true };

  const notionId = post.id.replace(/-/g, "");
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(notionId);

  return {
    props: { post, recordMap },
    revalidate: 86400,
  };
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

function BlogHead({ post }) {
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;

  return (
    <Head>
     <title>{Array.isArray(post.title) ? post.title.join(" ") : post.title}</title>
      <meta name="description" content={post.excerpt || ""} />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={canonicalUrl} />
      {post.cover && <meta property="og:image" content={post.cover} />}
      <meta property="og:site_name" content="Maxime Herbaut" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:description" content={post.excerpt} />
      {post.cover && <meta name="twitter:image" content={post.cover} />}

      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}

export default function BlogPost({ post, recordMap }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Afficher le bouton quand on scrolle à plus de 300px
  useEffect(() => {
    function handleScroll() {
      setShowScrollTop(window.pageYOffset > 300);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour scroller en douceur vers le haut
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-[#181b1f] text-gray-100 font-sans relative">
      <BlogHead post={post} />
      <div className="max-w-3xl mx-auto py-10 px-4">
        <Link
          href="/blog"
          className="inline-block mb-8 text-[#10b981] font-semibold hover:underline"
          aria-label="Retour à la liste complète des articles"
        >
          ← Tous les articles
        </Link>
        <h1 className="text-4xl sm:text-5xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#10b981] via-white to-[#6366f1] drop-shadow-xl tracking-tight">
          {post.title}
        </h1>
        <p className="text-sm text-gray-400 mb-2">{post.date}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags?.map(tag => (
            <span
              key={tag}
              className="bg-[#10b981]/20 text-[#10b981] rounded-lg px-3 py-1 text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="notion-content">
          <NotionRenderer recordMap={recordMap} darkMode />
        </div>
      </div>

      {/* Bouton Retour en haut */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Retour en haut de la page"
          className="fixed bottom-8 right-8 bg-[#10b981] hover:bg-[#0e9b73] text-white p-3 rounded-full shadow-lg transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#10b981]"
          title="Retour en haut"
        >
          {/* Icône flèche haut (lucide-react) */}
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
