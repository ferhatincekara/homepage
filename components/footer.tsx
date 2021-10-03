import Link from 'components/link';

import styles from 'components/footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          You can access the source codes of this website on{' '}
          <Link href="https://github.com/ferhatincekara/homepage" blank>
            Github.
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
