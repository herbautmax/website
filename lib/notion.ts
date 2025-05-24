import { Client } from "@notionhq/client";
import { Post } from "../types";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

function isFullPage(page: any): page is PageObjectResponse {
  return 'properties' in page;
}

export async function getBlogPosts(): Promise<Post[]> {
  const db = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
    sorts: [{ property: "date_publication", direction: "descending" }],
  });

  return db.results
    .filter(isFullPage)
    .map((page) => ({
      id: page.id,
      title: page.properties.titre.title[0]?.plain_text || "",
      slug: page.properties.slug.rich_text[0]?.plain_text || "",
      date: page.properties.date_publication.date?.start || "",
      excerpt: page.properties.intro.rich_text[0]?.plain_text || "",
      tags: page.properties.tags.multi_select?.map((t: any) => t.name) || [],
      cover: page.properties.image?.files?.[0]?.external?.url || "",
      content: page.properties.contenu?.rich_text[0]?.plain_text || "",
    }));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const db = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
    filter: {
      property: "slug",
      rich_text: { equals: slug },
    },
  });

  // Prend la première page complète qui match
  const page = db.results.find(isFullPage);
  if (!page) return null;
  return {
    id: page.id,
    title: page.properties.titre.title[0]?.plain_text || "",
    slug: page.properties.slug.rich_text[0]?.plain_text || "",
    date: page.properties.date_publication.date?.start || "",
    excerpt: page.properties.intro.rich_text[0]?.plain_text || "",
    tags: page.properties.tags.multi_select?.map((t: any) => t.name) || [],
    cover: page.properties.image?.files?.[0]?.external?.url || "",
    content: page.properties.contenu?.rich_text[0]?.plain_text || "",
  };
}
