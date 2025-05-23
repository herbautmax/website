import { getPostBySlug } from "@/lib/notion";

type Props = { params: { slug: string } };

export default async function BlogPost({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) return <div className="max-w-2xl mx-auto py-16 px-4">Article introuvable.</div>;

  // On affiche le contenu brut, tu peux utiliser react-notion-x pour un rendu riche Notion !
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">
        {post.properties.Title.title[0]?.plain_text}
      </h1>
      <p className="text-sm text-gray-500 mb-4">
        {post.properties.Date.date?.start}
      </p>
      <div>
        <p>
          {/* À améliorer avec du rendu Notion si tu veux ! */}
          {post.properties.Excerpt.rich_text[0]?.plain_text}
        </p>
      </div>
      <a href="/blog" className="mt-6 inline-block text-blue-600 hover:underline">
        ← Retour au blog
      </a>
    </div>
  );
}
