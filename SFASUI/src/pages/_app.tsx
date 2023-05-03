import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import { ClientConfigProvider } from 'src/client/shared/contexts/client-config';
import { appLayoutRenderer } from 'src/client/shared/layouts/AppLayout';
import { ExtendedNextPage } from 'src/client/shared/types/next';

import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/dist/base.css';
import 'src/client/styles/index.css';

export default function App({ Component, pageProps }: Omit<AppProps, 'Component'> & { Component: ExtendedNextPage }) {
    const layoutRenderer = Component.layoutRenderer || appLayoutRenderer();

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>SportsMap - твоя спортивная карта Санкт-Петербурга</title>
            </Head>
            <ClientConfigProvider>{layoutRenderer(<Component {...pageProps} />)}</ClientConfigProvider>
        </>
    );
}
