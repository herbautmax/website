import Link from "next/link";
import { Post } from "../../types";

type BlogPreviewProps = {
  posts: Post[];
};

export default function BlogPreview({ posts = [] }: BlogPreviewProps) {
  return (
    <section id="blog" className="py-20 w-full bg-[#181b1f]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-10 text-center text-white tracking-tight">
          Derniers articles
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {posts.length > 0 ? posts.slice(0, 3).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} passHref>
              <div className="cursor-pointer bg-[#23272a] rounded-2xl shadow-lg p-6 border border-white/10 hover:scale-105 hover:shadow-2xl hover:border-[#10b981] transition group flex flex-col h-full">
                {post.cover && (
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="rounded-xl mb-4 w-full h-32 object-cover bg-[#191b1f]"
                  />
                )}
                <h3 className="font-bold text-lg mb-2 text-white group-hover:text-[#10b981]">
                  {post.title}
                </h3>
                <div className="text-xs text-gray-500 mb-2">
                  {post.date}
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#10b981]/20 text-[#10b981] rounded-lg px-2 py-0.5 text-xs font-semibold"
                    >
                      {tag}
                    </span>
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
          <Link href="/blog" className="px-6 py-3 bg-[#10b981] hover:bg-[#0e9b73] rounded-xl text-white font-bold shadow transition-all text-base">
            Tous les articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
