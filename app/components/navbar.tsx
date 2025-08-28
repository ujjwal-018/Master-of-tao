import React from 'react'
import styles from './navbar.module.css'

const navbar = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.main}>
      <div className={styles.logo}></div>
      <h1 className={styles.name}>Master of Tao Association</h1>
      </div>
    </div>
  )
}

export default navbar
