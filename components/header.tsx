import NextLink from 'next/link';
import { useState, MouseEvent } from 'react';
import cx from 'classnames';
import Hamburger from 'components/hamburger';
import Link from 'components/link';

import styles from 'components/header.module.scss';
import SiteConfig from '../site.config';

const MENU = [
  { name: 'Instagram', url: SiteConfig.social.instagram },
  { name: 'Twitter', url: SiteConfig.social.twitter },
  { name: 'Github', url: SiteConfig.social.github },
  { name: 'Linkedin', url: SiteConfig.social.linkedin },
];

function Header() {
  const [open, setOpen] = useState(false);

  const smoothScroll = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();

    const id: any = e.currentTarget.getAttribute('href');
    const anchor: any = document.querySelector(id);
    const offsetTop: any = anchor?.getBoundingClientRect().top + window.pageYOffset;

    anchor.focus();
    window.scroll({
      top: offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <a href="#page" className={styles.skipLink} tabIndex={1} onClick={smoothScroll}>
          Skip to Content
        </a>

        <div className={styles.inner}>
          <div className={styles.title}>
            <NextLink href="/">
              <a className={styles.titleText}>Ferhat incekara</a>
            </NextLink>
          </div>

          <div className={cx(styles.nav, { [styles.navOpened]: open })}>
            <div className={styles.navWrapper}>
              <nav className={styles.navList}>
                {MENU.map(({ name, url }) => (
                  <div key={url} className={styles.navItem}>
                    <Link href={url} blank>
                      {name}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
          </div>

          <div className={cx(styles.hamburger, { [styles.hambugerActive]: open })}>
            <Hamburger open={open} onClick={() => setOpen(!open)} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
