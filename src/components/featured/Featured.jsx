import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'
import Mainfeature from '../mainFeature/Mainfeature'

export const Featured = ({data}) => {
  return (
    <div className={styles.container}>
      <Mainfeature data={data}/>
    </div>
  )
}