import React from 'react';
import styles from './EducationSection.module.css';
import educationhead from '../../images/Educationhead.svg';
import certs from '../../images/certs.svg';

const EducationSection = () => (
  <section className={styles.education} id="education">
    <h2>Education & Certifications</h2>
    <p className={styles.intro}>Academic foundation and professional qualifications.</p>
    <div className={styles.columns}>
      <div className={styles.column}>
        <h3>
          <img src={educationhead} alt="Education Icon" className={styles.educationIcon} />
          Academic Background
        </h3>
        <div className={styles.card}>
          <strong>Doctor of Medicine (M.D.)</strong>
          <p>University of Connecticut<br />
          Farmington, CT · 2024-2027<br />
          GPA: 3.94/4.0</p>
          <h4>Honors and Achievements</h4>
          <div className={styles.skills}><span>Medical Sciences</span><span>Clinical Skills</span><span>Research Methods</span></div>
        </div>
        <div className={styles.card}>
          <strong>Psychobiology</strong>
          <p>University of California, Davis<br />
          Davis, CA · 2016-2019<br />
          GPA: 3.94/4.0</p>
          <h4>Honors and Achievements</h4>
          <div className={styles.skills}><span>Psychology</span><span>Biology</span><span>Research</span></div>
        </div>
      </div>
      <div className={styles.column}>
        <h3>
          <img src={certs} alt="Certifications Icon" className={styles.educationIcon} />
          Certifications & Licenses
        </h3>
        <div className={styles.card}>
          <ul>
            <li>BLS (Basic Life Support) - American Heart Association</li>
            <li>ACLS (Advanced Cardiovascular Life Support) - American Heart Association</li>
            <li>PALS (Pediatric Advanced Life Support) - American Heart Association</li>
            <li>USMLE Step 1 - Pass (2023)</li>
            <li>USMLE Step 2 CK - 260 (2024)</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection; 