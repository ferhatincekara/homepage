import type { HTMLAttributes } from 'react';
import cx from 'classnames';

import styles from 'components/hamburger.module.scss';

interface Props extends HTMLAttributes<any> {
  open: boolean;
  className?: string;
}

function Hamburger({ open, className, ...htmlProps }: Props) {
  return (
    <button
      type="button"
      className={cx(styles.button, { [styles.open]: open }, className)}
      {...htmlProps}
    >
      <div className={styles.box}>
        <div className={styles.inner}>
          <div className={styles.topBun} />
          <div className={styles.bottomBun} />
        </div>
      </div>
    </button>
  );
}

export default Hamburger;
