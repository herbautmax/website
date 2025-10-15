import Link from "next/link";
import { Post } from "../../types";
import { formatDateFR } from "../../lib/formatDate";
import TagLabel from "../TagLabel";

type BlogPreviewProps = {
  posts: Post[];
};

export default function BlogPreview({ posts = [] }: BlogPreviewProps) {
  const latestPosts = posts.slice(0, 3);

  return (
    <section id="blog" className="py-20 w-full bg-[#181b1f] scroll-mt-24" aria-labelledby="blog-title">
      <div className="max-w-5xl mx-auto">
        <h2
          id="blog-title"
          className="text-3xl sm:text-4xl font-black mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#10b981] via-white to-[#6366f1]"
        >
          Derniers articles
        </h2>
        <ul className="grid md:grid-cols-3 gap-8 mb-10 mx-4 md:mx-0" role="list">
          {latestPosts.length > 0 ? (
            latestPosts.map((post) => (
              <li key={post.slug} className="h-full">
                <article
                  className="bg-[#23272a] rounded-2xl shadow-lg border border-white/10 transition hover:scale-[1.02] hover:shadow-2xl hover:border-[#10b981] focus-within:outline-none h-full flex flex-col"
                  aria-labelledby={`post-${post.slug}`}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex flex-col flex-1 p-6 gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:ring-offset-2 focus-visible:ring-offset-[#23272a]"
                    aria-labelledby={`post-${post.slug}`}
                  >
                    {post.cover && (
                      <img
                        src={post.cover}
                        alt={post.title}
                        className="rounded-xl w-full h-40 object-cover bg-[#191b1f]"
                        loading="lazy"
                      />
                    )}
                    <h3 id={`post-${post.slug}`} className="font-bold text-xl text-white transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-300">{formatDateFR(post.date)}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags?.map((tag) => (
                        <TagLabel key={tag} tag={tag} />
                      ))}
                    </div>
                    <p className="text-gray-200 text-sm line-clamp-4">{post.excerpt}</p>
                  </Link>
                </article>
              </li>
            ))
          ) : (
            <li className="md:col-span-3">
              <p className="text-center text-gray-200">Aucun article pour le moment.</p>
            </li>
          )}
        </ul>
        <div className="flex justify-center">
          <Link
            href="/blog"
            className="px-7 py-3 bg-gradient-to-r from-[#10b981] to-[#6366f1] hover:from-[#0e9b73] hover:to-[#4f46e5] rounded-xl text-white font-extrabold shadow transition-all text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:ring-offset-2 focus-visible:ring-offset-[#181b1f]"
            aria-label="Accéder à tous les articles du blog"
          >
            Tous les articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
