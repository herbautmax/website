import React from "react";
import type { NotionBlock } from "../lib/notion";

// Rendu du texte enrichi Notion (gras, italique, code inline, liens…).
type RichTextItem = {
  plain_text: string;
  href: string | null;
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
};

function RichText({ value }: { value: RichTextItem[] }) {
  return (
    <>
      {value.map((t, i) => {
        const a = t.annotations;
        let node: React.ReactNode = t.plain_text;

        if (a.code)
          node = (
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-[0.9em] text-mist">
              {node}
            </code>
          );
        if (a.bold) node = <strong className="font-semibold text-mist">{node}</strong>;
        if (a.italic) node = <em>{node}</em>;
        if (a.strikethrough) node = <s>{node}</s>;
        if (a.underline) node = <u>{node}</u>;
        if (t.href) {
          const external = /^https?:\/\//.test(t.href);
          node = (
            <a
              href={t.href}
              className="text-brand underline underline-offset-2 hover:text-brand-hover"
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {node}
            </a>
          );
        }

        return <React.Fragment key={i}>{node}</React.Fragment>;
      })}
    </>
  );
}

function richTextOf(block: NotionBlock): RichTextItem[] {
  const payload = block[block.type] as { rich_text?: RichTextItem[] } | undefined;
  return payload?.rich_text ?? [];
}

// Rend une liste de blocs, en regroupant les items de liste consécutifs
// dans un même <ul>/<ol>.
function renderBlocks(blocks: NotionBlock[]): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  let i = 0;

  while (i < blocks.length) {
    const type = blocks[i].type;

    if (type === "bulleted_list_item" || type === "numbered_list_item") {
      const ordered = type === "numbered_list_item";
      const items: NotionBlock[] = [];
      while (i < blocks.length && blocks[i].type === type) {
        items.push(blocks[i]);
        i++;
      }
      const ListTag = ordered ? "ol" : "ul";
      out.push(
        <ListTag
          key={items[0].id}
          className={
            ordered
              ? "my-4 list-decimal space-y-2 pl-6"
              : "my-4 list-disc space-y-2 pl-6"
          }
        >
          {items.map((it) => (
            <li key={it.id} className="leading-relaxed text-fog marker:text-brand">
              <RichText value={richTextOf(it)} />
              {it.children && it.children.length > 0 && (
                <div className="mt-2">{renderBlocks(it.children)}</div>
              )}
            </li>
          ))}
        </ListTag>
      );
      continue;
    }

    out.push(<Block key={blocks[i].id} block={blocks[i]} />);
    i++;
  }

  return out;
}

function Children({ block }: { block: NotionBlock }) {
  if (!block.children || block.children.length === 0) return null;
  return <div className="mt-2">{renderBlocks(block.children)}</div>;
}

function Block({ block }: { block: NotionBlock }) {
  switch (block.type) {
    case "paragraph": {
      const rich = richTextOf(block);
      // Paragraphe vide sans enfant = simple espacement, ignoré.
      if (rich.length === 0 && !block.children?.length) return null;
      return (
        <>
          {rich.length > 0 && (
            <p className="my-4 leading-relaxed text-fog">
              <RichText value={rich} />
            </p>
          )}
          <Children block={block} />
        </>
      );
    }
    case "heading_2":
      return (
        <>
          <h2 className="mb-3 mt-10 text-2xl font-bold tracking-tight text-mist">
            <RichText value={richTextOf(block)} />
          </h2>
          <Children block={block} />
        </>
      );
    case "heading_3":
      return (
        <>
          <h3 className="mb-2 mt-8 text-xl font-semibold text-mist">
            <RichText value={richTextOf(block)} />
          </h3>
          <Children block={block} />
        </>
      );
    case "quote": {
      // Les quotes servent aussi de conteneurs (listes, code, paragraphes
      // imbriqués). On rend le texte du quote en italique, puis ses enfants
      // normalement, à l'intérieur du bloc indenté.
      const rich = richTextOf(block);
      return (
        <blockquote className="my-6 border-l-2 border-brand pl-4 text-fog">
          {rich.length > 0 && (
            <p className="italic text-muted">
              <RichText value={rich} />
            </p>
          )}
          <Children block={block} />
        </blockquote>
      );
    }
    case "code": {
      const code = (block.code as { rich_text?: RichTextItem[] }).rich_text ?? [];
      return (
        <pre className="my-6 overflow-x-auto rounded-lg bg-black/40 p-4 text-sm">
          <code className="text-mist">{code.map((t) => t.plain_text).join("")}</code>
        </pre>
      );
    }
    case "divider":
      return <hr className="my-8 border-white/10" />;
    default:
      return null;
  }
}

export default function NotionBlocks({ blocks }: { blocks: NotionBlock[] }) {
  return <>{renderBlocks(blocks)}</>;
}
