import { useState, useEffect } from "react";
import Link from "next/link";
import { getBlogPosts, getPostBySlug, getPostBlocks, NotionBlock } from "../../lib/notion";
import NotionBlocks from "../../components/NotionBlocks";
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

  const blocks = await getPostBlocks(post.id);

  return {
    props: { post, blocks },
    revalidate: 86400,
  };
}

interface BlogPostProps {
  post: Post;
  blocks: NotionBlock[];
}

export default function BlogPost({ post, blocks }: BlogPostProps) {
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
        <p className="mb-1 text-sm text-muted">
          {content.blog.author.bylinePrefix}{" "}
          <Link href="/" className="text-fog underline underline-offset-2 hover:text-brand">
            {content.blog.author.name}
          </Link>{" "}
          · {content.blog.author.role}
        </p>
        <p className="mb-2 text-sm text-muted">{formatDateFR(post.date)}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags?.map(tag => (
            <TagLabel key={tag} tag={tag} />
          ))}
        </div>
        <div className="notion-content">
          <NotionBlocks blocks={blocks} />
        </div>

        <aside className="mt-14 rounded-2xl border border-ink-700 bg-ink-800 p-6 sm:p-8">
          <p className="mb-2 font-label text-xs uppercase tracking-wide text-brand">
            {content.blog.author.eyebrow}
          </p>
          <p className="text-lg font-bold tracking-tight text-mist">
            {content.blog.author.name}{" "}
            <span className="font-normal text-muted">· {content.blog.author.role}</span>
          </p>
          <p className="mt-2 leading-relaxed text-fog">{content.blog.author.bio}</p>
          <p className="mt-1 text-fog">{content.blog.author.availability}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={content.contactInfo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-brand-ink transition hover:bg-brand-hover"
            >
              {content.blog.author.cta}
            </a>
            <Link
              href={content.blog.author.cvHref}
              className="text-sm text-fog underline underline-offset-2 hover:text-brand"
            >
              {content.blog.author.cvLabel}
            </Link>
          </div>
        </aside>
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
