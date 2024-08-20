import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import { UserButton, SignIn } from "@clerk/nextjs";

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
          <li>
            <Link href="/contact">
             Contact
            </Link>
          </li>
        </ul>
        <div>
          <UserButton />
          <SignIn mode="modal">
            <button className={`${styles.btn} ${styles['btn-primary']}`}>
              Sign In
            </button>
          </SignIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;