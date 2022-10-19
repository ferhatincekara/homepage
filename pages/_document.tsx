import NextDocument, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { META } from '@/lib/helper';

class MyDocument extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang={META.lang}>
        <Head>
          {/* base */}
          <meta charSet="utf-8" />
          <meta name="robots" content="follow, index" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content={META.description} />
          <link rel="canonical" href={META.siteUrl} />
          <link
            rel="preload"
            href="/fonts/Inter-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Inter-Medium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Inter-ExtraBold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          {/* facebook */}
          <meta property="og:url" content={META.siteUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={META.title} />
          <meta property="og:description" content={META.description} />

          {/* twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content={META.siteUrl} />
          <meta name="twitter:title" content={META.title} />
          <meta name="twitter:description" content={META.description} />

          {/* pwa */}
          <link href="/static/site.webmanifest" rel="manifest" />
          <link href="/static/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <link href="/static/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/static/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
          <link color="#000000" href="/static/safari-pinned-tab.svg" rel="mask-icon" />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />

          {/* analytic */}
          {META.googleAnalytic && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${META.googleAnalytic}`}
              />
              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${META.googleAnalytic}');`,
                }}
              />
            </>
          )}
        </Head>

        <body className="bg-[#101010] text-white antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
