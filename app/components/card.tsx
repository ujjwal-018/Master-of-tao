import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'

const Card = ({image,title,content}:{image:string,title:string,content:string}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.textContainer}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p> 
      </div>
    </div>
  )
}

export default Card;
