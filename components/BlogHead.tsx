import Head from "next/head";
import { Post } from "../types";
import { content } from "../content/site";
import JsonLd from "./JsonLd";
import { blogPostingSchema } from "../lib/structuredData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function BlogHead({ post }: { post: Post }) {
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;
  const displayTitle = post.title || content.meta.untitled;

  return (
    <>
      <Head>
        <title>{displayTitle}</title>
        <meta name="description" content={post.excerpt || ""} />
        <meta property="og:title" content={displayTitle} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        {post.cover && <meta property="og:image" content={post.cover} />}
        <meta property="og:site_name" content={content.brand} />
        {post.date && <meta property="article:published_time" content={post.date} />}
        <meta property="article:author" content={content.brand} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={displayTitle} />
        <meta name="twitter:description" content={post.excerpt} />
        {post.cover && <meta name="twitter:image" content={post.cover} />}

        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <JsonLd data={blogPostingSchema(post)} />
    </>
  );
}
