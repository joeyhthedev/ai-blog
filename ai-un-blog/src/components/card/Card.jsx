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
                <span className={styles.category}>GENERATIVE AI</span>
            </div>
        <Link className={styles.title} href="/">
            <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>This article explains the rationale behind the UN Security Council's decision to ban Generative AI. This decision was lauded by all member states. 
</p>
        <Link className={styles.link} href="/">Read More</Link>
        </div>
    </div>
  )
}
