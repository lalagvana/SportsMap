import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta
                        name="description"
                        content="SportsMap поможет найти спортивные объекты на территории Санкт-Петербурга"
                    />
                    <meta property="og:site_name" content="SportsMap" />
                    <meta property="og:title" content="SportsMap - твоя спортивная карта Санкт-Петербурга" />
                    <meta property="og:description" content="SportsMap поможет найти спортивные объекты на территории Санкт-Петербурга" />
                    <meta charSet="utf-8" />
                    <meta name="keywords" content="спорт, красногвардейский, санкт-петербург, карта" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
