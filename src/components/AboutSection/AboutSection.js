import React from 'react';
import styles from './AboutSection.module.css';

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
        <div className={styles.card}><strong>Compassionate Care</strong><br />I care for each patient as an individual, ensuring empathy and understanding.</div>
        <div className={styles.card}><strong>Community Service</strong><br />Volunteer and mentor roles in various medical settings.</div>
        <div className={styles.card}><strong>Lifelong Learning</strong><br />Always seeking new knowledge and skills to improve patient care.</div>
      </div>
    </div>
  </section>
);

export default AboutSection; 