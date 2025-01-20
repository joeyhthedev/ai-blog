import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image'
import Link from 'next/link'

export const Card = ({key, item}) => {
  return (
    <div className={styles.container} key={key}>
        <div className={styles.imageContainer}>
            <Image src="/asset/Guterres.jpg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2025 </span>
                <span className={styles.category}>{item.catSlug}</span>
            </div>
        <Link className={styles.title} href="/">
            <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>{item.desc} 
</p>
        <Link className={styles.link} href="/">Read More</Link>
        </div>
    </div>
  )
}
