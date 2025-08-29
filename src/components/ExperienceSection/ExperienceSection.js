import React from 'react';
import styles from './ExperienceSection.module.css';
import steth from '../../images/Steth.svg';
import beaker from '../../images/beaker.svg';

const ExperienceSection = () => (
  <section className={styles.experience} id="experience">
    <h2>Clinical & Research Experience</h2>
    <p className={styles.intro}>Academic foundation and professional qualifications.</p>
    <div className={styles.columns}>
      <div className={styles.column}>
        <h3>
          <img src={steth} alt="Clinical Rotations Icon" className={styles.educationIcon} />
          Clinical Rotations
        </h3>
        <div className={styles.card}>
          <strong>Internal Medicine Rotation</strong><br />
          University of Connecticut<br />
          Sept 2024–Mar 2025<br />
          <div className={styles.skills}><span>Patient Assessment</span><span>Treatment Planning</span><span>Medical Documentation</span></div>
        </div>
        <div className={styles.card}>
          <strong>Internal Medicine Rotation</strong><br />
          University of Connecticut<br />
          Sept 2024–Mar 2025<br />
          <div className={styles.skills}><span>Patient Assessment</span><span>Treatment Planning</span><span>Medical Documentation</span></div>
        </div>
      </div>
      <div className={styles.column}>
        <h3>
          <img src={beaker} alt="Research Experience Icon" className={styles.educationIcon} />
          Research Experience
        </h3>
        <div className={styles.card}>
          <strong>Research Assistant</strong><br />
          University of Connecticut, School of Medicine<br />
          2024–Present<br />
          <div className={styles.skills}><span>Publications</span></div>
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection; 