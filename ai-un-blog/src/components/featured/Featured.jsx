import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'
import Mainfeature from '../mainFeature/Mainfeature'

export const Featured = ({data}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Your Source For <b className={styles.boldAI}>AI</b> Developments in <b className={styles.boldCongress}>US Congress.</b>
      </h1>
      <Mainfeature data={data}/>
    </div>
  )
}