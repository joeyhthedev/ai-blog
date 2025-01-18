"use client"
import Link from 'next/link';
import React from 'react'
import styles from "./authLinks.module.css"
import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';

const AuthLinks = () => {
  
  const [open, setOpen] = useState(false);

  const {status} = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link} onClick={signOut}>Logout</span>
        </>
      )}
      <div className={styles.burger}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </>
  );
};
    
export default AuthLinks
