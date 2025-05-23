import { Post } from "../../types";
import Link from "next/link";

type BlogPreviewProps = {
  posts: Post[];
};

export default function BlogPreview({ posts }: BlogPreviewProps) {
  return (
    <section id="blog" className="py-24">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Derniers articles</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        {posts.slice(0, 3).map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg hover:shadow-xl transition duration-200 group hover:-translate-y-1">
              <h3 className="font-bold text-xl mb-2 group-hover:text-[#10b981] transition-colors duration-200">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{post.date}</p>
              <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/blog" className="text-[#10b981] hover:text-[#059669] transition-colors duration-200 font-semibold text-lg">
          Tous les articles →
        </Link>
      </div>
    </section>
  );
}