import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from 'components/header';
import Footer from 'components/footer';

import 'pages/app.scss';
import SiteConfig from '../site.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{SiteConfig.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main id="page" className="main" role="main" tabIndex={-1}>
        <section className="page-section">
          <Component {...pageProps} />
        </section>
      </main>
      <Footer />
    </>
  );
}
export default MyApp;
