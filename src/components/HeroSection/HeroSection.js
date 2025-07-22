import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => (
  <section className={styles.hero}>
    <div className={styles.textContent}>
      <h1>I am <span className={styles.highlight}>Katrina Jackson</span></h1>
      <h2>Medical Student & Aspiring Urologist</h2>
      <p>Currently an MS3 at UConn with a B.S. in Psychology from UC Davis. I have experience in internal medicine, surgery, and urology. I’m passionate about patient care, mentorship, and advancing medical education.</p>
      <div className={styles.buttons}>
        <button className={styles.cv}>View CV</button>
        <button className={styles.contact}>Contact Me</button>
      </div>
    </div>
    <div className={styles.imageWrapper}>
      <div className={styles.profileImg} />
    </div>
  </section>
);

export default HeroSection; 