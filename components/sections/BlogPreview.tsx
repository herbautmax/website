import Link from "next/link";
import { Post } from "../../types";
import { formatDateFR } from "../../lib/formatDate";
import TagLabel from "../TagLabel";
import { cardBaseClasses, eyebrowClasses, sectionTitleClasses } from "../sectionStyles";

type BlogPreviewProps = {
  posts: Post[];
};

export default function BlogPreview({ posts = [] }: BlogPreviewProps) {
  const latestPosts = posts.slice(0, 3);

  return (
    <section id="blog" className="w-full py-24 scroll-mt-24" aria-labelledby="blog-title">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-11 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-4">
            <span className={eyebrowClasses}>Blog</span>
            <h2 id="blog-title" className={sectionTitleClasses}>
              Méthode produit &amp; IA
            </h2>
          </div>
          <Link
            href="/blog"
            className="rounded text-sm font-semibold text-brand transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            aria-label="Accéder à tous les articles du blog"
          >
            Tous les articles →
          </Link>
        </div>

        <ul className="grid gap-5 md:grid-cols-3" role="list">
          {latestPosts.length > 0 ? (
            latestPosts.map((post) => (
              <li key={post.slug} className="h-full">
                <article
                  className={`${cardBaseClasses} group h-full overflow-hidden`}
                  aria-labelledby={`post-${post.slug}`}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
                    aria-labelledby={`post-${post.slug}`}
                  >
                    {post.cover && (
                      <img
                        src={post.cover}
                        alt={post.title}
                        className="h-40 w-full bg-ink object-cover"
                        loading="lazy"
                      />
                    )}
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <h3
                        id={`post-${post.slug}`}
                        className="text-lg font-bold leading-snug tracking-tight text-mist transition-colors group-hover:text-brand"
                      >
                        {post.title}
                      </h3>
                      <p className="text-xs text-muted">{formatDateFR(post.date)}</p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags?.map((tag) => (
                          <TagLabel key={tag} tag={tag} />
                        ))}
                      </div>
                      <p className="line-clamp-4 text-sm text-muted">{post.excerpt}</p>
                    </div>
                  </Link>
                </article>
              </li>
            ))
          ) : (
            <li className="md:col-span-3">
              <p className="text-center text-fog">Aucun article pour le moment.</p>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
