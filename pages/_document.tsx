import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr" className="dark">
      <Head>
        {/* Google Fonts – tu peux personnaliser */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=Manrope:wght@400;700&family=Sora:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#181b1f" />
      </Head>
      <body className="bg-[#181b1f] text-gray-100 font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
