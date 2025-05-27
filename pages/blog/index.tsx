import { getBlogPosts } from "../../lib/notion";
import { Post } from "../../types";
import Link from "next/link";
import Head from "next/head";
import { formatDateFR } from "../../lib/formatDate";
import TagLabel from "../../components/TagLabel";
import BlogMiniHeader from "@/components/BlogMiniHeader";

type BlogPageProps = {
  posts: Post[];
};

export async function getStaticProps() {
  const posts = await getBlogPosts();
  return { props: { posts }, revalidate: 86400 };
}

export default function BlogPage({ posts }: BlogPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#181b1f] text-gray-100 font-sans">
      <Head>
        <title>Tous les articles | Maxime Herbaut</title>
        <meta name="description" content="Retrouvez tous les articles du blog de Maxime Herbaut, Product Manager à Lille." />
      </Head>
      <BlogMiniHeader variant="home" />
      <div className="max-w-3xl mx-auto flex-grow px-4 pt-20 flex flex-col">
        <h1 className="text-4xl sm:text-5xl font-black mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#10b981] via-white to-[#6366f1] drop-shadow-xl tracking-tight w-fit pr-32">
          Tous les articles
        </h1>
        <ul className="space-y-6 flex-grow mb-20">
          {posts.map(post => (
            <li
              key={post.slug}
              className="border border-white/10 bg-[#23272a] p-6 rounded-2xl hover:shadow-2xl transition"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold text-[#10b981]">{post.title}</h2>
              </Link>
              <p className="text-sm text-gray-400">{formatDateFR(post.date)}</p>
              <p className="text-gray-200">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {post.tags?.map((tag) => (
                  <TagLabel key={tag} tag={tag} />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
