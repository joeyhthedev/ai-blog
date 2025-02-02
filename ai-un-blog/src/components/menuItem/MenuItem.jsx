import React from 'react'
import Link from 'next/link'
import styles from './menuitem.module.css'
import Image from 'next/image'

const MenuItem = ({item, key}) => {
  return (
    <div className={styles.container} key={key}>
        <Link href={`/posts/${item.slug}`} className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src={item.img} alt="" fill className={styles.image}/> 
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>{item.cat?.title}</span>
            <h3 className={styles.postTitle}>{item.title}</h3>
            <div className={styles.detail}> 
              <span className={styles.username}>{item.user?.name}</span>
              <span> ○ </span>
              <span className={styles.date}>{item.createdAt}</span>
            </div>
          </div>
        </Link>
      </div>
  )
}

export default MenuItem