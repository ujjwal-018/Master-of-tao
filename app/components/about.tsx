import React from 'react'
import styles from './about.module.css'

const about = () => {
  return (
    <div className={styles.container}>
        <h1>About Coach</h1>
        <div className={styles.content}>
        
      <div className={styles.textcontainer}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className={styles.imagecontainer}></div>
      </div>
    </div>
  )
}

export default about

