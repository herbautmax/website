import { useState, useEffect } from "react";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";
import Link from "next/link";
import { getBlogPosts, getPostBySlug } from "../../lib/notion";
import { normalizeRecordMap } from "../../lib/notionRecordMap";
import { Post } from "../../types";
import { GetStaticPropsContext } from 'next';
import { formatDateFR } from "../../lib/formatDate";
import TagLabel from "../../components/TagLabel";
import BlogMiniHeader from "@/components/BlogMiniHeader";
import BlogHead from "@/components/BlogHead";
import { content } from "../../content/site";

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
  const recordMap = normalizeRecordMap(await notion.getPage(notionId));

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
    <div className="relative min-h-screen bg-ink font-sans text-fog">
      <BlogHead post={post} />
      <BlogMiniHeader variant="articles" />
      <main id="main-content" className="mx-auto max-w-3xl px-4 py-10 pt-20" tabIndex={-1}>
        <h1 className="mb-2 text-4xl font-bold tracking-tightest text-mist sm:text-5xl">
          {post.title}
        </h1>
        <p className="mb-2 text-sm text-muted">{formatDateFR(post.date)}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags?.map(tag => (
            <TagLabel key={tag} tag={tag} />
          ))}
        </div>
        <div className="notion-content">
          <NotionRenderer
            recordMap={recordMap}
            darkMode
            components={{ Code, Collection }}
          />
        </div>
      </main>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label={content.blog.scrollTopAria}
          className="fixed bottom-8 right-8 rounded-full bg-brand p-3 text-brand-ink shadow-lg transition hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          title={content.blog.scrollTopTitle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
