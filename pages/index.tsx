import type { NextPage } from 'next';
import NextImage from 'next/image';
import PageTransition from 'components/page-transition';
import LinkButton from 'components/link-button';
import WorkExperience from 'components/work-experience';

import styles from 'pages/index.module.scss';
import SiteConfig from '../site.config';

const Home: NextPage = () => {
  return (
    <PageTransition>
      <div className={styles.home}>
        <div className={styles.inner}>
          <div className={styles.iam}>
            <div className={styles.text}>
              <h1 className={styles.about}>
                Hi, I’m Ferhat—a developer with a great passion for designing simple and elegant
                structures for complex interfaces dealing with front-end technologies.
              </h1>
              <h3>
                <LinkButton href={`mailto:${SiteConfig.author.email}`} blank={false}>
                  Email me.
                </LinkButton>
              </h3>
            </div>

            <div className={styles.work}>
              <WorkExperience />
            </div>
          </div>
          <div className={styles.spacer} />
          <div className={styles.photo}>
            <NextImage
              src="/photos/ferhatincekara.jpg"
              alt="Ferhat incekara"
              width={1080}
              height={1080}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
