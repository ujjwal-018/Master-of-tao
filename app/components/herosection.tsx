import React from 'react'
import styles from './hero.module.css'

const herosection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftsection}>
        <h1>Welcome to the master of tao association
          Welcome to the master of tao association
        </h1>
        <p>Join us in our journey to master the art of tao.</p>
      </div>
      <div className={styles.rightsection}>
        <div className={styles.imageContainer}></div>
    </div>
    </div>
  )
}

export default herosection;
