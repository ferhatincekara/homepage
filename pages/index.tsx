import type { NextPage } from 'next';
import PageTransition from 'components/page-transition';

const Home: NextPage = () => {
  return (
    <PageTransition>
      <div>Hello World!</div>
    </PageTransition>
  );
};

export default Home;
