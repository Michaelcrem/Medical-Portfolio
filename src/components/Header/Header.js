import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Katrina Jackson</div>
      <button 
        className={styles.hamburger} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>
      <div className={`${styles.navContainer} ${isMenuOpen ? styles.navOpen : ''}`}>
        <nav className={styles.nav}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <button className={styles.cta} onClick={closeMenu}>Get in Touch</button>
      </div>
    </header>
  );
};

export default Header; 