import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>Katrina Jackson</div>
    <nav className={styles.nav}>
      <a href="#about">About</a>
      <a href="#education">Education</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
      <button className={styles.cta}>Get in Touch</button>
    </nav>
  </header>
);

export default Header; 