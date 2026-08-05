// lib/notion.ts
import { Client } from "@notionhq/client";
import {
  PageObjectResponse,
  QueryDatabaseResponse,
  PartialPageObjectResponse
} from "@notionhq/client/build/src/api-endpoints";
import { Post } from "../types";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

// Types pour les propriétés Notion
interface TitleProperty {
  type: "title";
  title: Array<{
    plain_text: string;
    type: "text";
    text: { content: string };
  }>;
}

interface RichTextProperty {
  type: "rich_text";
  rich_text: Array<{
    plain_text: string;
    type: "text";
    text: { content: string };
  }>;
}

interface DateProperty {
  type: "date";
  date: {
    start: string;
  };
}

interface MultiSelectProperty {
  type: "multi_select";
  multi_select: Array<{
    name: string;
  }>;
}

interface FilesProperty {
  type: "files";
  files: Array<{
    external?: {
      url: string;
    };
  }>;
}

interface NotionProperties {
  titre?: TitleProperty;
  slug?: RichTextProperty;
  date_publication?: DateProperty;
  intro?: RichTextProperty;
  tags?: MultiSelectProperty;
  image?: FilesProperty;
}

export async function getBlogPosts(): Promise<Post[]> {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID as string,
      sorts: [{ property: "date_publication", direction: "descending" }],
    });

    return (response as QueryDatabaseResponse).results
      .filter((page): page is PageObjectResponse => 'properties' in page)
      .map((page) => {
        const properties = page.properties as NotionProperties;

        return {
          id: page.id,
          title: properties.titre?.title?.[0]?.plain_text || "Untitled",
          slug: properties.slug?.rich_text?.[0]?.plain_text || "",
          date: properties.date_publication?.date?.start || "",
          excerpt: properties.intro?.rich_text?.[0]?.plain_text || "",
          tags: properties.tags?.multi_select?.map((t) => t.name) || [],
          cover: properties.image?.files?.[0]?.external?.url ?? null, // Remplace undefined par null
        };
      });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

// Bloc de contenu Notion (structure allégée : on n'a besoin que du type et de
// sa charge utile, plus les enfants pour les listes imbriquées).
export type NotionBlock = {
  id: string;
  type: string;
  has_children: boolean;
  children?: NotionBlock[];
  [key: string]: unknown;
};

// Récupère le contenu d'un article via l'API OFFICIELLE Notion (api.notion.com,
// authentifiée par NOTION_API_KEY). Contrairement à l'API non-officielle
// (loadPageChunk), elle n'est pas derrière la protection anti-bot Cloudflare
// qui bloquait les IP de Vercel et faisait échouer les déploiements.
export async function getPostBlocks(blockId: string): Promise<NotionBlock[]> {
  const blocks: NotionBlock[] = [];
  let cursor: string | undefined;

  do {
    const response = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
      page_size: 100,
    });

    for (const block of response.results) {
      if (!("type" in block)) continue;
      const b = block as unknown as NotionBlock;
      if (b.has_children) {
        b.children = await getPostBlocks(b.id);
      }
      blocks.push(b);
    }

    cursor = response.has_more ? response.next_cursor ?? undefined : undefined;
  } while (cursor);

  return blocks;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID as string,
      filter: {
        property: "slug",
        rich_text: { equals: slug },
      },
    });

    const results = (response as QueryDatabaseResponse).results;
    if (results.length === 0) return null;

    const page = results.find((page): page is PageObjectResponse => 'properties' in page);
    if (!page) return null;

    const properties = page.properties as NotionProperties;

    return {
      id: page.id,
      title: properties.titre?.title?.[0]?.plain_text || "Untitled",
      slug: properties.slug?.rich_text?.[0]?.plain_text || "",
      date: properties.date_publication?.date?.start || "",
      excerpt: properties.intro?.rich_text?.[0]?.plain_text || "",
      tags: properties.tags?.multi_select?.map((t) => t.name) || [],
      cover: properties.image?.files?.[0]?.external?.url ?? null, // Remplace undefined par null
    };
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }
}
