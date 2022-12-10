import React from "react";
import "tailwindcss/dist/base.css";
import "client/styles/globalStyles.css";
import "client/styles/style.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SportsMap - твоя спортивная карта Санкт-Петербурга</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
