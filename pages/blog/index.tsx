// pages/blog/index.tsx

import { getBlogPosts } from "../../lib/notion";
import { Post } from "../../types";
import Link from "next/link";
import Head from "next/head";

type BlogPageProps = {
  posts: Post[];
};

export async function getStaticProps() {
  const posts = await getBlogPosts();
  return { props: { posts }, revalidate: 600 };
}

export default function BlogPage({ posts }: BlogPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#181b1f] text-gray-100 font-sans">
      <Head>
        <title>Tous les articles | Maxime Herbaut</title>
        <meta name="description" content="Retrouvez tous les articles du blog de Maxime Herbaut, Product Manager à Lille." />
      </Head>
      <div className="max-w-3xl mx-auto flex-grow py-16 px-4 flex flex-col">
        <Link href="/" className="inline-block mb-8 text-[#10b981] font-semibold hover:underline">
          ← Retour à la page d’accueil
        </Link>
        <h1 className="text-4xl font-bold mb-8">Tous les articles</h1>
        <ul className="space-y-6 flex-grow">
          {posts.map(post => (
            <li key={post.slug} className="border border-white/10 bg-[#23272a] p-6 rounded-2xl hover:shadow-2xl transition">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold text-[#10b981]">{post.title}</h2>
              </Link>
              <p className="text-sm text-gray-400">{post.date}</p>
              <p className="text-gray-200">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#10b981]/20 text-[#10b981] rounded-lg px-2 py-0.5 text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

