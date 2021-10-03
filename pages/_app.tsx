import type { AppProps } from 'next/app';
import Header from 'components/header';
import Footer from 'components/footer';

import 'pages/app.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
