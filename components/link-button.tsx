import type { ReactNode, HTMLAttributes } from 'react';
import cx from 'classnames';

import styles from 'components/link-button.module.scss';

interface Props extends HTMLAttributes<any> {
  children: ReactNode;
  href: string;
  blank: boolean;
  className?: string;
}

function Link({ children, href, blank, className, ...htmlProps }: Props) {
  const isBlank = blank
    ? {
        rel: 'noopener noreferrer',
        target: '_blank',
      }
    : {};

  return (
    <a href={href} {...isBlank} className={cx(styles.linkButton, className)} {...htmlProps}>
      {children}
    </a>
  );
}

export default Link;
