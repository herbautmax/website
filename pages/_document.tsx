import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr" className="dark">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#181b1f" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-ink text-fog font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
