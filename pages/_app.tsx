import type { AppProps } from 'next/app';

import 'pages/app.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
