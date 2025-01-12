import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { AuthLinks } from '../authLinks/AuthLinks'
import { ThemeToggle } from '../themeToggle/ThemeToggle'

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>AI @ UN</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>Newsletter</Link>
        <Link href="/" className={styles.link}>Legislation Guide</Link>
        <AuthLinks />
      </div>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      
    </div>
  )
}