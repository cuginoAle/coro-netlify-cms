import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './style.module.css';

const Heading = ({
  children,
  href,
}: {
  children: ReactNode;
  href?: string;
}) => {
  return href ? (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  ) : (
    <h2 className="border-l-8 border-accent text-2xl font-semibold pl-4 mb-8">
      {children}
    </h2>
  );
};

export { Heading };
