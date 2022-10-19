import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { META } from '@/lib/helper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{META.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
