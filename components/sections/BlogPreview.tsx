import Link from "next/link";
import { Post } from "../../types";
import { formatDateFR } from "../../lib/formatDate";
import TagLabel from "../TagLabel";

type BlogPreviewProps = {
  posts: Post[];
};

export default function BlogPreview({ posts = [] }: BlogPreviewProps) {
  return (
    <section id="blog" className="py-20 w-full bg-[#181b1f]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#10b981] via-white to-[#6366f1]">
          Derniers articles
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-10 mx-4 md:mx-0">
          {posts.length > 0 ? posts.slice(0, 3).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} passHref>
              <div className="cursor-pointer bg-[#23272a] rounded-2xl shadow-lg p-6 border border-white/10 hover:scale-[1.03] hover:shadow-2xl hover:border-[#10b981] focus-within:ring-2 ring-[#10b981] transition group flex flex-col h-full outline-none max-w-full">
                {post.cover && (
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="rounded-xl mb-4 w-full h-36 object-cover bg-[#191b1f]"
                  />
                )}
                <h3 className="font-bold text-xl mb-2 text-white group-hover:text-[#10b981] group-focus:text-[#10b981] transition-colors">
                  {post.title}
                </h3>
                <div className="text-xs text-gray-500 mb-2">
                  {formatDateFR(post.date)}
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags?.map((tag) => (
                   <TagLabel key={tag} tag={tag} />
                  ))}
                </div>
                <p className="text-gray-400 line-clamp-3 flex-1">{post.excerpt}</p>
              </div>
            </Link>
          )) : (
            <div className="col-span-3 text-center text-gray-500">
              Aucun article pour le moment.
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <Link
            href="/blog"
            className="px-7 py-3 bg-gradient-to-r from-[#10b981] to-[#6366f1] hover:from-[#0e9b73] hover:to-[#4f46e5] rounded-xl text-white font-extrabold shadow transition-all text-base focus:outline-none focus:ring-2 ring-[#10b981]"
          >
            Tous les articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
