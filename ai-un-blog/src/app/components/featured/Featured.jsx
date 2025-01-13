import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Your Source For <b className={styles.bold}>AI</b> Developments at the <b className={styles.bold}>United Nations.</b>
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
            UN Secretary-General Antonio Guterres Declares Skibbidy Toilet a National Emergency
          </h1>
          <p className={styles.postDescription}>
            Says Guterres: "Fortnite Battle Pass. I just shit out my ass."
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}