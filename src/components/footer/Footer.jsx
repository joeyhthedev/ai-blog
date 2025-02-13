import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/asset/logo.png" alt="blog" width={100} height={100} />
          </div>
          <p className={styles.description}>
            AI in Congress is an independent blog and is not affiliated with, endorsed by, or sponsored by the United States Congress or any government entity. All views and opinions expressed are solely those of the authors.
          </p>
          <p className={styles.plug}>AI in Congress is designed, coded, and maintained by Joseph Holzman (joeyhthedev@gmail.com)</p>
        </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <Link href='/'>Homepage</Link>
          <Link href='/contributors'>Contributors</Link>
          <Link href='/privacy-policy'>Privacy Policy</Link>
        </div>
      </div>
    </div>
  )
}
