import React from 'react'
import styles from "./categoryList.module.css"
import Link from 'next/link'

export const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}></h1>
      <div className={styles.categories}>
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
            
          </Link>
      </div>
    </div>
  )
}