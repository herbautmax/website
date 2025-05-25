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
