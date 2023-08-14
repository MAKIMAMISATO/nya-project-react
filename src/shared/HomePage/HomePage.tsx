import React from 'react';
import styles from './homepage.module.css';
// import '../../index.css'
import {
  useSearchParams,
} from "react-router-dom"


export function HomePage() {
  const [queryParameters] = useSearchParams();

  return (
    <div className='container'>
      <header>
      <h1 className={styles.title}>welcum {queryParameters.get("username")} ^ ^</h1>

      </header>
    </div>
  );
}
