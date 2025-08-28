import React from 'react'
import styles from './contact.module.css'

const contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainheading}>Contact Us</h1>
      <div className={styles.contactInfo}>
        <div className={styles.contactDetails}>
          <div className={styles.contact}>
          <h2>Contact Us</h2>
          <p>Indore naka , sehore</p>
          <p>lakhanthakurofficial.@gmail.com</p>
          <p>+91 12345 67890</p>
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.headings}>
          <h2>Send us a message</h2>
          <p className={styles.para}>We had love to hear from you!</p>
          </div>
          <div className={styles.seperator}></div>
          <form className={styles.contactForm}>
            <div className={styles.names}>
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            </div>
            <input className={styles.input} type="email" placeholder="Your Email" required />
            <input className={styles.input} type="text" name="subject" id="sub" placeholder='Subject' />
            <textarea className={styles.input} placeholder="Your Message" required></textarea>
            <button className={styles.submit} type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default contact
