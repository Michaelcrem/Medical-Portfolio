import React from 'react';
import styles from './ContactSection.module.css';

const ContactSection = () => (
  <section className={styles.contact} id="contact">
    <h2>Get in touch</h2>
    <p className={styles.intro}>I’d love to hear from residency programs, research collaborators, or fellow medical professionals</p>
    <form className={styles.form}>
      <div className={styles.row}>
        <input type="text" placeholder="First name *" required />
        <input type="text" placeholder="Last name *" required />
      </div>
      <input type="email" placeholder="Email *" required />
      <textarea placeholder="Message *" required />
      <input type="tel" placeholder="Phone number" />
      <button type="submit">Send message</button>
    </form>
  </section>
);

export default ContactSection; 