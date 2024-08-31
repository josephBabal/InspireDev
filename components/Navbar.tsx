"use client";

import Link from "next/link";
import React from "react";
import styles from "@/styles/navbar.module.css";
import { useState } from "react";
import links from "@/data/pages.json"

const Navbar: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleHamburger = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.message}> Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</div>
  
      <nav className={styles.navbar}>

        <div className={styles.navListContainer}>
          <div>
            <Link href="/"><h1 className={`${styles.logo} primary-gradient`}>InspireDev</h1></Link>
          </div>

          <span className={styles.line}> </span>

          <ul className={styles.navList}>
            {links.map((link) => (
              <Link key={link.id} href={link.link}>
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
        
        <Link className={styles.cta} href="#"> View Project </Link>

        <button 
          className={`${styles.hamburgerContainer} ${isOpen && styles.active}`}
          onClick={toggleHamburger}
        >
          <span className={styles.burger}></span>
        </button>
      </nav>

      <div className={`${styles.overlay} ${isOpen && styles.active}`}>
          <ul className={styles.overlayItems}>
            {links.map((link) => (
              <Link key={link.id} href={link.link}>
                {link.name}
              </Link>
            ))}
            <Link className={styles.mobileCta} href="">View Project</Link>
          </ul>
        </div>
    </header>
  );
};

export default Navbar;
