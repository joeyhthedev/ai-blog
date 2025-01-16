import React from 'react'
import styles from "./menu.module.css"
import Link from 'next/link'
import Image from 'next/image'

export const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's Hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/asset/Guterres.jpg" alt="" fill className={styles.image}/> 
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Generative AI</span>
            <h3 className={styles.postTitle}>There is Lead in the Water. We Need to Do Something.</h3>
            <div className={styles.detail}> 
              <span className={styles.username}>Joseph Holzman</span>
              <span className={styles.date}>11.03.2025</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}