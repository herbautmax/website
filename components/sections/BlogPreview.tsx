import Link from "next/link";
import { Post } from "../../types";
import { formatDateFR } from "../../lib/formatDate";
import TagLabel from "../TagLabel";
import { cardBaseClasses } from "../sectionStyles";
import SectionHeading from "../ui/SectionHeading";
import { buttonClasses } from "../ui/Button";

type BlogPreviewProps = {
  posts: Post[];
};

export default function BlogPreview({ posts = [] }: BlogPreviewProps) {
  const latestPosts = posts.slice(0, 3);

  return (
    <section id="blog" className="w-full bg-ink py-20 scroll-mt-24" aria-labelledby="blog-title">
      <div className="mx-auto max-w-5xl px-4 md:px-0">
        <SectionHeading eyebrow="Le blog" title="Derniers articles" id="blog-title" className="mb-12" />

        <ul className="mb-10 grid gap-8 md:grid-cols-3" role="list">
          {latestPosts.length > 0 ? (
            latestPosts.map((post) => (
              <li key={post.slug} className="h-full">
                <article
                  className={`${cardBaseClasses} group h-full flex flex-col`}
                  aria-labelledby={`post-${post.slug}`}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex flex-1 flex-col gap-3 p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                    aria-labelledby={`post-${post.slug}`}
                  >
                    {post.cover && (
                      <img
                        src={post.cover}
                        alt={post.title}
                        className="h-40 w-full rounded-xl bg-ink object-cover"
                        loading="lazy"
                      />
                    )}
                    <h3
                      id={`post-${post.slug}`}
                      className="text-xl font-bold text-mist transition-colors group-hover:text-brand"
                    >
                      {post.title}
                    </h3>
                    <p className="text-xs text-muted">{formatDateFR(post.date)}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags?.map((tag) => (
                        <TagLabel key={tag} tag={tag} />
                      ))}
                    </div>
                    <p className="line-clamp-4 text-sm text-fog">{post.excerpt}</p>
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

        <div className="flex justify-center">
          <Link href="/blog" className={buttonClasses('primary')} aria-label="Accéder à tous les articles du blog">
            Tous les articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
