"use client"
import Link from 'next/link';
import React from 'react'
import styles from "./authLinks.module.css"
import { useState } from 'react';
import { signOut } from 'next-auth/react';

const AuthLinks = () => {
  
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("authenticated");

  const handleSignOut = async () => {
    await signOut({ redirect: false }); // Prevent redirect on sign out
    setStatus("notauthenticated"); // Update local status state
  };

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link} onClick={handleSignOut}>Logout</span>
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
