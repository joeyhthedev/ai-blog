import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { AuthLinks } from '../authLinks/AuthLinks'
import { ThemeToggle } from '../themeToggle/ThemeToggle'

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <Image src="/asset/logo.png" alt="The logo for the website" className={styles.logo} width={100} height={100}/>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>Newsletter</Link>
        <Link href="/" className={styles.link}>Legislation Guide</Link>
        <AuthLinks />
      </div>
        <button className={styles.donate}>DONATE</button>
    </div>
  )
}