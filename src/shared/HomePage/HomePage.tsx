import React from 'react';
import { SpecialBorderContainer } from '../SpecialBorderContainer';
import styles from './homepage.module.css';
import { Sidebar } from './Sidebar';
import { ContentArea } from './ContentArea';

export function HomePage() {
  const storedUsername = localStorage.getItem('username');

  return (
    <div className='container'>
      <header className={styles.header}>
        <SpecialBorderContainer padding='20px'>
          <h1 className={styles.title}>welcum {storedUsername} ^ ^</h1>
        </SpecialBorderContainer>
      </header>
      <div className={styles.main}>
        <Sidebar></Sidebar>
        <ContentArea></ContentArea>
      </div>
    </div>
  );
}
