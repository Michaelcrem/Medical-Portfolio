import React from 'react';
import styles from './AboutSection.module.css';
import buttonUtility from '../../images/Button utility.svg';

const AboutSection = () => (
  <section className={styles.about} id="about">
    <h2>About Me</h2>
    <p className={styles.intro}>My journey in medicine began with a simple desire to help others heal. Through years of study and clinical experience, this passion has only grown stronger.</p>
    <div className={styles.contentWrapper}>
              <div className={styles.left}>
          <h3>My Medical Journey</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.<br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa.<br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus</p>
        </div>
      <div className={styles.right}>
        <div className={styles.card}>
          <img src={buttonUtility} alt="Compassionate Care Icon" className={styles.cardIcon} />
          <div className={styles.cardContent}>
            <strong>Compassionate Care</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non.</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={buttonUtility} alt="Community Service Icon" className={styles.cardIcon} />
          <div className={styles.cardContent}>
            <strong>Community Service</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non.</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={buttonUtility} alt="Lifelong Learning Icon" className={styles.cardIcon} />
          <div className={styles.cardContent}>
            <strong>Lifelong Learning</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection; 