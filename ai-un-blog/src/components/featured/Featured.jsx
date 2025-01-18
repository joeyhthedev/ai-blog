import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Your Source For <b className={styles.bold}>AI</b> Developments in <b className={styles.bold}>US Congress.</b>
      </h1>
      <div className={styles.post}>
        <div className={styles.featuredMarker}>
          <h1>FEATURED</h1>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/asset/Guterres.jpg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Top 5 Reasons That German People Should Leave the United States and Never Come Back
          </h1>
          <p className={styles.postDescription}>
            They gotta leave on god
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}