import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';

import {

  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div className={`${styles.navbar} ${styles.nav}`}>
      <div className={styles['navbar-start']}>

        <Link href="/" className={`${styles.btn} ${styles['btn-ghost']} ${styles['text-xl']}`}>
CDAC FLASHCARDS

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
        {/* <Link href="/login" className={styles.btn}>
          Login
        </Link> */}
      </div>
      </div>
<div>
<SignedOut>
            <SignInButton className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition duration-300 hover:opacity-90 transform hover:-translate-y-1 hover:shadow-lg" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
</div>
    </div>
  );
};

export default Navbar;

