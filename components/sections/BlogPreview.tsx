import { Post } from "../../types";
import Link from "next/link";

type BlogPreviewProps = {
  posts: Post[];
};

export default function BlogPreview({ posts }: BlogPreviewProps) {
  return (
    <section id="blog" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Derniers articles</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        {posts.slice(0, 3).map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow hover:shadow-lg transition group">
              <h3 className="font-bold text-lg mb-1 group-hover:text-[#10b981]">{post.title}</h3>
              <p className="text-xs text-gray-500 mb-2">{post.date}</p>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/blog" className="text-[#10b981] hover:underline font-semibold">Tous les articles →</Link>
      </div>
    </section>
  );
}
