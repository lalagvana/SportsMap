import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { YMaps } from '@pbe/react-yandex-maps';

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
            <YMaps query={{ apikey: 'f90d801e-5706-4c4d-96df-2742aec12e8f' }}>
                <ClientConfigProvider>{layoutRenderer(<Component {...pageProps} />)}</ClientConfigProvider>
            </YMaps>
        </>
    );
}
