import NextDocument, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import SiteConfig from '../site.config';

class MyDocument extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang={SiteConfig.lang}>
        <Head>
          {/* base */}
          <title>{SiteConfig.title}</title>
          <meta charSet="utf-8" />
          <meta name="robots" content="follow, index" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content={SiteConfig.description} />
          <link rel="canonical" href={SiteConfig.siteUrl} />

          {/* facebook */}
          <meta property="og:url" content={SiteConfig.siteUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={SiteConfig.title} />
          <meta property="og:description" content={SiteConfig.description} />

          {/* twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content={SiteConfig.siteUrl} />
          <meta name="twitter:title" content={SiteConfig.title} />
          <meta name="twitter:description" content={SiteConfig.description} />

          {/* pwa */}
          <link href="/static/site.webmanifest" rel="manifest" />
          <link href="/static/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <link href="/static/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/static/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
          <link color="#000000" href="/static/safari-pinned-tab.svg" rel="mask-icon" />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
