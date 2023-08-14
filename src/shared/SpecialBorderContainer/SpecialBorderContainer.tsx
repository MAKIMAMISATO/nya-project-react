import React from 'react';
import styles from './specialbordercontainer.module.css';

interface IlayoutProps {
  padding: string;
  children?: React.ReactNode;
}

export function SpecialBorderContainer({ padding, children }: IlayoutProps) {
  const containerStyle = {
    padding: padding,
  }

  return (
    <div className={`${styles.container}`} style={containerStyle}>
        < span className={styles.top}>
        </span>
        < span className={styles.bottom}>
        </span>
        < span className={styles.left}>
        </span>
        < span className={styles.right}>
        </span>
        {children}
    </div>
  );
}
