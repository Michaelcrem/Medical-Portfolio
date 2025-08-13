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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod tempor dolor non ultrices. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam velit, nec ultricies nisi nisl euismod.</p>
      </div>
      <div className={styles.right}>
        <div className={styles.card}>
          <img src={buttonUtility} alt="Compassionate Care Icon" className={styles.cardIcon} />
          <div className={styles.cardContent}>
            <strong>Compassionate Care</strong>
            <p>I care for each patient as an individual, ensuring empathy and understanding.</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={buttonUtility} alt="Community Service Icon" className={styles.cardIcon} />
          <div className={styles.cardContent}>
            <strong>Community Service</strong>
            <p>Volunteer and mentor roles in various medical settings.</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={buttonUtility} alt="Lifelong Learning Icon" className={styles.cardIcon} />
          <div className={styles.cardContent}>
            <strong>Lifelong Learning</strong>
            <p>Always seeking new knowledge and skills to improve patient care.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection; 