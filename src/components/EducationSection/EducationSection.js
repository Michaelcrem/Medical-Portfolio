import React from 'react';
import styles from './EducationSection.module.css';

const EducationSection = () => (
  <section className={styles.education} id="education">
    <h2>Education & Certifications</h2>
    <p className={styles.intro}>Academic foundation and professional qualifications.</p>
    <div className={styles.columns}>
      <div className={styles.column}>
        <h3>Academic Background</h3>
        <div className={styles.card}>
          <strong>Doctor of Medicine (M.D.)</strong><br />
          University of Connecticut<br />
          Farmington, CT · 2024-2027<br />
          GPA: 3.94/4.0<br />
          <div className={styles.links}><a href="#">University of Connecticut</a></div>
        </div>
        <div className={styles.card}>
          <strong>Psychobiology</strong><br />
          University of California, Davis<br />
          Davis, CA · 2016-2019<br />
          GPA: 3.94/4.0<br />
          <div className={styles.links}><a href="#">University of Something</a></div>
        </div>
      </div>
      <div className={styles.column}>
        <h3>Certifications & Licenses</h3>
        <div className={styles.card}>
          <strong>Doctor of Medicine (M.D.)</strong><br />
          University of Connecticut<br />
          Farmington, CT · 2024-2027<br />
          GPA: 3.94/4.0<br />
          <div className={styles.links}><a href="#">University of Connecticut</a></div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection; 