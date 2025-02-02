import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image'
import Link from 'next/link'

export const Card = ({key, item}) => {
  return (
    <div className={styles.container} key={key}>
        <div className={styles.imageContainer}>
            <Image src={item.img} alt="" fill />
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>{item.createdAt}</span>
                <span> ○ </span>
                <span className={styles.category}>{item.cat?.title}</span>
            </div>
        <Link className={styles.title} href={`/posts/${item.slug}`}>
            <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>{item.desc}</p>
        <Link className={styles.link} href={`/posts/${item.slug}`}>Read More</Link>
        </div>
    </div>
  )
}
