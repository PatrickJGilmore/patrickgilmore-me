import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload Inter font (replace with your actual font) */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          media="print"
          onLoad={() => {
            const media = document.querySelector('link[href*="fonts.googleapis.com"]');
            if (media) media.setAttribute('media', 'all');
          }}
        />
        {/* Preload critical scripts */}
        <link rel="preload" href="/_next/static/chunks/main.js" as="script" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
