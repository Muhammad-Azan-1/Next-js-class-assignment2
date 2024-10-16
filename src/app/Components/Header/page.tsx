"use client";
import React, { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.outerNavbox}>
      <div className={styles.innerNavbox}>
        {/* Toggle Button for Small Screens */}
        <div className={styles.menuToggle} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        {/* Menu Items */}
        <ul className={isMenuOpen ? `${styles.showMenu}` : ''}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/Aboutus">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/Services">
              Services
            </Link>
          </li>
          <li>
            <Link href="/Contactus">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



// "use client"
// import styles from './page.module.css'
// import Link from 'next/link'
// const Navbar = () => {
//   return (
//     <nav>

     
//     <div className={`${styles.outerNavbox}`}>
       
//       <div className={`${styles.innerNavbox}`}>
//       <ul>
//         <li>
//               <Link href="/">
//                    Home
//               </Link>
//         </li>
//         <li>
//               <Link href="/Aboutus">
//                      About Us
//               </Link>
//         </li>
//         <li>
//               <Link href="/Serivces">
//                    Services
//               </Link>
//         </li>
//         <li>
//               <Link href="/Contactus">
//                  Contact Us
//               </Link>
//         </li>
//       </ul>
//       </div>
//     </div>
  
//   </nav>
//   )
// }

// export default Navbar