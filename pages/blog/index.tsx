import { getBlogPosts } from "../../lib/notion";
import { Post } from "../../types";
import Link from "next/link";

type BlogPageProps = {
  posts: Post[];
};

export async function getServerSideProps() {
  const posts = await getBlogPosts();
  return { props: { posts } };
}

export default function BlogPage({ posts }: BlogPageProps) {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Tous les articles</h1>
      <ul className="space-y-6">
        {posts.map(post => (
          <li key={post.slug} className="border p-4 rounded-lg hover:shadow">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
            </Link>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
