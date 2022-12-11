import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import 'tailwindcss/dist/base.css';
import 'src/client/styles/globalStyles.css';
import 'src/client/styles/style.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>
                    SportsMap - твоя спортивная карта Санкт-Петербурга
                </title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
