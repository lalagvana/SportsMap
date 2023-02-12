import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render() {
        return (
            <Html>
                <Head>
                    {this.props.styleTags}
                    <meta name="description" content="SportsMap - твоя спортивная карта Санкт-Петербурга" />
                    <meta property="og:site_name" content="SportsMap" />
                    <meta property="og:title" content="SportsMap - твоя спортивная карта Санкт-Петербурга" />
                    <meta property="og:description" content="SportsMap - твоя спортивная карта Санкт-Петербурга" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
