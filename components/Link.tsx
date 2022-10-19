import type { ReactNode, HTMLAttributes } from 'react';

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
    <a href={href} {...isBlank} className={className} {...htmlProps}>
      {children}
    </a>
  );
}

export default Link;
