import { GetServerSideProps } from "next";
import { getPostBySlug } from "@/lib/notion";
import { Post } from "../../types";

type Props = { post: Post | null };

export default function BlogPost({ post }: Props) {
  if (!post) return <div className="max-w-2xl mx-auto py-16 px-4">Article introuvable.</div>;

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{post.date}</p>
      <div>
        <p>{post.excerpt}</p>
      </div>
      <a href="/blog" className="mt-6 inline-block text-blue-600 hover:underline">
        ← Retour au blog
      </a>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string;
  const post = await getPostBySlug(slug);
  return { props: { post } };
};
