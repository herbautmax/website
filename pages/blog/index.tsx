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
    <div className="flex min-h-screen flex-col bg-ink font-sans text-fog">
      <Head>
        <title>Tous les articles | Maxime Herbaut</title>
        <meta name="description" content="Retrouvez tous les articles du blog de Maxime Herbaut, Product Manager à Lille." />
      </Head>
      <BlogMiniHeader variant="home" />
      <main id="main-content" className="mx-auto flex max-w-3xl flex-grow flex-col gap-10 px-4 pt-20" tabIndex={-1}>
        <header className="flex flex-col gap-3">
          <span className="font-label text-sm font-semibold uppercase tracking-[0.16em] text-brand">Le blog</span>
          <h1 className="text-4xl font-bold tracking-tightest text-mist sm:text-5xl">
            Tous les articles
          </h1>
          <p className="max-w-2xl text-fog">
            Retrouvez l’ensemble des publications pour approfondir les thématiques produit, design et innovation.
          </p>
        </header>
        <ul className="mb-20 flex-grow space-y-6" role="list">
          {posts.map(post => (
            <li
              key={post.slug}
              className="rounded-3xl border border-white/10 bg-ink-800 p-6 shadow-card transition hover:border-brand hover:shadow-card-hover"
            >
              <article aria-labelledby={`blog-${post.slug}`}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-800"
                  aria-labelledby={`blog-${post.slug}`}
                >
                  <h2 id={`blog-${post.slug}`} className="text-xl font-bold text-brand">
                    {post.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted">{formatDateFR(post.date)}</p>
                  <p className="mt-4 text-fog">{post.excerpt}</p>
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
