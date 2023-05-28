import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta
                        name="description"
                        content="SportsMap поможет найти спортивные объекты на территории Санкт-Петербурга. Спорт, залы, спортивные площадки, Красногвардейскийский район."
                    />
                    <meta property="og:site_name" content="SportsMap" />
                    <meta property="og:title" content="SportsMap - твоя спортивная карта Санкт-Петербурга" />
                    <meta
                        property="og:description"
                        content="SportsMap поможет найти спортивные объекты на территории Санкт-Петербурга. Спорт, залы, спортивные площадки, Красногвардейскийский район."
                    />
                    <meta charSet="utf-8" />
                    <meta name="keywords" content="спорт, красногвардейский район, санкт-петербург, карта" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script
                        type="text/javascript"
                        dangerouslySetInnerHTML={{
                            __html: `
                      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                      m[i].l=1*new Date();
                      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                      ym(93743189, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true,
                      webvisor:true
                    });`,
                        }}
                    />
                    <noscript>
                        <div>
                            <img
                                src="https://mc.yandex.ru/watch/93743189"
                                style={{ position: 'absolute', left: '-9999px' }}
                                alt=""
                            />
                        </div>
                    </noscript>
                </body>
            </Html>
        );
    }
}
