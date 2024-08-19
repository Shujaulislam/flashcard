// import React from 'react'
// import styles from './navbar.module.css'
// const Navbar = () => {
//   return (
//     <div className="navbar bg-base-100 nav">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h8m-8 6h16" />
//         </svg>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//         <li><a>Item 1</a></li>
//         <li>
//           <a>Parent</a>
//           <ul className="p-2">
//             <li><a>Submenu 1</a></li>
//             <li><a>Submenu 2</a></li>
//           </ul>
//         </li>
//         <li><a>Item 3</a></li>
//       </ul>
//     </div>
//     <a className="btn btn-ghost text-xl">daisyUI</a>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//       <li><a>Item 1</a></li>
//       <li>
//         <details>
//           <summary>Parent</summary>
//           <ul className="p-2">
//             <li><a>Submenu 1</a></li>
//             <li><a>Submenu 2</a></li>
//           </ul>
//         </details>
//       </li>
//       <li><a>Item 3</a></li>
//     </ul>
//   </div>
//   <div className="navbar-end">
//     <a className="btn">Button</a>
//   </div>
// </div>
//   )
// }

// export default Navbar



// import React from 'react'
// import styles from './navbar.module.css'

// const Navbar = () => {
//   return (
//     <div className={`${styles.navbar} ${styles.nav}`}>
//       <div className={styles['navbar-start']}>
        
//         <a className={`${styles.btn} ${styles['btn-ghost']} ${styles['text-xl']}`}>daisyUI</a>
//       </div>
//       <div className={`${styles['navbar-center']} ${styles['hidden']} ${styles['lg:flex']}`}>
//         <ul className={`${styles.menu} ${styles['menu-horizontal']} ${styles['px-1']}`}>
//           <li><a>Home</a></li>
//           <li>
//           <a>Prebuild cards</a>
//           </li>
//           <li><a>custom cards</a></li>
//         </ul>
//         {/* now button is here */}
//         <div >  
//         <a className={styles.btn}>Login</a>
//       </div>
//       </div>
//       {/* <div className={styles['navbar-end']}>//    this button is not here. 
//         <a className={styles.btn}>Button</a>
//       </div> */}
//     </div>
//   )
// }

// export default Navbar


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
            <Link href="/custom-cards">
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

