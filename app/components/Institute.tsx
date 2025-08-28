import React from 'react'
import styles from './institute.module.css'
import Card from './card'

const Institute = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Our Institute</h1>
      <div className={styles.cards}>
      <Card image='/bruce.png' title='Bruce Lee' content='GOAT Of Martial Artist' 
      />
      <Card image='/bruce.png' title='Bruce Lee' content='GOAT Of Martial Artist' 
      />
      <Card image='/bruce.png' title='Bruce Lee' content='GOAT Of Martial Artist' 
      />
      <Card image='/bruce.png' title='Bruce Lee' content='GOAT Of Martial Artist' 
      />
      <Card image='/bruce.png' title='Bruce Lee' content='GOAT Of Martial Artist' 
      />
      <Card image='/bruce.png' title='Bruce Lee' content='GOAT Of Martial Artist' 
      />
      <Card image='/bruce.png' title='Bruce Lee' content='GOAT Of Martial Artist' 
      />
      <Card image='/bruce.png' title='Bruce Lee' content='GOAT Of Martial Artist' 
      />
      <Card image='/bruce.png' title='Bruce Lee' content='GOAT Of Martial Artist' 
      />
      <Card image='/bruce.png' title='Bruce Lee' content='GOAT Of Martial Artist' 
      />
      </div>
    </div>
  )
}

export default Institute;

