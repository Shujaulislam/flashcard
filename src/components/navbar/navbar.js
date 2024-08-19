import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={`${styles.navbar} ${styles.nav}`}>
      <div className={styles['navbar-start']}>
        <Link href="/" className={`${styles.btn} ${styles['btn-ghost']} ${styles['text-xl']}`}>
         C-DAC Flashcards
        </Link>
      </div>
      <div className={`${styles['navbar-center']} ${styles['hidden']} ${styles['lg:flex']}`}>
        <ul className={`${styles.menu} ${styles['menu-horizontal']} ${styles['px-1']}`}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              Prebuilt Cards
            </Link>
          </li>
          <li>
            <Link href="/customcard">
              Custom Cards
            </Link>
          </li>
        </ul>
        <div>
        <Link href="/login" className={styles.btn}>
          Login
        </Link>
      </div>
      </div>
     
    </div>
  );
};

export default Navbar;

