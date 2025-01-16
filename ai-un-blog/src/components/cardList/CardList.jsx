import React from 'react'
import styles from "./cardList.module.css"
import { Pagination } from '../Pagination/Pagination'
import { Card } from '../card/Card'

export const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
        <div className={styles.posts}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
      </div>
    </div>
  )
}