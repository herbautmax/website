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
      <main id="main-content" className="max-w-3xl mx-auto flex-grow px-4 pt-20 flex flex-col gap-10" tabIndex={-1}>
        <header>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#10b981] via-white to-[#6366f1] drop-shadow-xl tracking-tight">
            Tous les articles
          </h1>
          <p className="text-gray-200 max-w-2xl">
            Retrouvez l’ensemble des publications pour approfondir les thématiques produit, design et innovation.
          </p>
        </header>
        <ul className="space-y-6 flex-grow mb-20" role="list">
          {posts.map(post => (
            <li
              key={post.slug}
              className="border border-white/10 bg-[#23272a] p-6 rounded-2xl transition hover:border-[#10b981] hover:shadow-2xl"
            >
              <article aria-labelledby={`blog-${post.slug}`}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:ring-offset-2 focus-visible:ring-offset-[#23272a] rounded-xl"
                  aria-labelledby={`blog-${post.slug}`}
                >
                  <h2 id={`blog-${post.slug}`} className="text-xl font-semibold text-[#10b981]">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-300 mt-1">{formatDateFR(post.date)}</p>
                  <p className="text-gray-200 mt-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {post.tags?.map((tag) => (
                      <TagLabel key={tag} tag={tag} />
                    ))}
                  </div>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
