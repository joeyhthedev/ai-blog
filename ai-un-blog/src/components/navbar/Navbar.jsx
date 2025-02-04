import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <Image src="/asset/logo.png" alt="The logo for the website" className={styles.logo} width={100} height={100}/>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/contributors" className={styles.link}>Contributors</Link>
        <Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link>
      </div>
        <button className={styles.donate}>DONATE</button>
    </div>
  );
}