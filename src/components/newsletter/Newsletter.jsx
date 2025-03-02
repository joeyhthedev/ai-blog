"use client"

import React from 'react'
import styles from './newsletter.module.css'
import { useState} from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleChange = (event) => {
        setEmail(event.target.value);
    }

    return (
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.mainText}>Subscribe to Our Free Newsletter For Updates on AI in US Congress</h1>
            <form className={styles.submitForm}>
                <input className={styles.inputField} type='text' value={email} onChange={handleChange} placeholder='Enter Email Address'/>
                <button className={styles.submitButton}>Subscribe</button>
            </form>
          </div>
        </div>
      );
}

export default Newsletter