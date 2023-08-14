import React from 'react';
import styles from './contentarea.module.css';
import { SpecialBorderContainer } from '../../SpecialBorderContainer';

export function ContentArea() {
  return (
    <div className={styles.container}>
      <SpecialBorderContainer padding='20px'></SpecialBorderContainer>
    </div>
  );
}
