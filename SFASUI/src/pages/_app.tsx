import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { YMaps } from '@pbe/react-yandex-maps';
import NProgress from 'nprogress';

import { ThemeConfigProvider } from 'src/client/shared/contexts/theme-config';
import { appLayoutRenderer } from 'src/client/shared/layouts/AppLayout';
import { ExtendedNextPage } from 'src/client/shared/types/next';

import 'react-toastify/dist/ReactToastify.css';
import 'src/client/styles/index.css';

import Router from 'next/router';


export default function App({ Component, pageProps }: Omit<AppProps, 'Component'> & { Component: ExtendedNextPage }) {
    const layoutRenderer = Component.layoutRenderer || appLayoutRenderer();

    Router.events.on('routeChangeStart', () => NProgress.start());
    Router.events.on('routeChangeComplete', () => NProgress.done());
    Router.events.on('routeChangeError', () => NProgress.done());

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>SportsMap - твоя спортивная карта Санкт-Петербурга</title>
            </Head>
            <YMaps query={{ apikey: 'f90d801e-5706-4c4d-96df-2742aec12e8f' }}>
                <ThemeConfigProvider>{layoutRenderer(<Component {...pageProps} />)}</ThemeConfigProvider>
            </YMaps>
        </>
    );
}
