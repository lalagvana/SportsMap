import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>SportsMap - твоя спортивная карта Санкт-Петербурга</title>
        <meta
          name="description"
          content="SportsMap - твоя спортивная карта Санкт-Петербурга"
        />
        <meta property="og:site_name" content="SportsMap" />
        <meta
          property="og:title"
          content="SportsMap - твоя спортивная карта Санкт-Петербурга"
        />
        <meta
          property="og:description"
          content="SportsMap - твоя спортивная карта Санкт-Петербурга"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
