import Head from "next/head";

// Injecte un bloc de données structurées schema.org dans le <head>.
// Le `<` est échappé pour éviter toute rupture de balise / injection.
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <Head>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: json }}
      />
    </Head>
  );
}
