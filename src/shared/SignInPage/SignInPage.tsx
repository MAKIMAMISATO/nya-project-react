import React, { useState } from 'react';
import styles from './signinpage.module.css';
import { Link } from '@reach/router';

export function SignInPage() {
  const [username, setUsername] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <div className="container">
      <header className={styles.header}>
        <h1 className={styles.title}>Wake the fuck up samurai</h1>
        <h2 className={styles.txt}> we have a city to pat</h2>
      </header>
      <form className={styles.form}>
      <input
        className={`${styles.signInInput} def-input`}
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={handleInputChange}
      />
        <Link className={`${styles.signInBtn} def-btn`} to={`/home?username=${username}`} onClick={() => {console.log("blyaa")}}>
         Sign In
        </Link>
      </form>

    </div>
  );
}


