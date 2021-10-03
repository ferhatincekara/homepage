import type { NextPage } from 'next';
import Head from 'next/head';
import PageTransition from 'components/page-transition';

import styles from 'pages/404.module.scss';

const Error: NextPage = () => {
  return (
    <PageTransition>
      <Head>
        <title>404</title>
      </Head>

      <div className={styles.error}>
        <p className={styles.text}>404</p>
      </div>
    </PageTransition>
  );
};

export default Error;
