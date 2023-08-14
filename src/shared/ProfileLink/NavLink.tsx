import React from 'react';
import styles from './navlink.module.css';

interface INavLinkProps {
  txt: string;
  href?: string;
  svg?: React.ReactNode;
}

export function NavLink({ txt, href, svg }: INavLinkProps) {
  return (
    <a className={styles.link} href={`${href}`}>
      {svg}
      <span className={styles.txt}>{txt}</span>
    </a>
  );
}
