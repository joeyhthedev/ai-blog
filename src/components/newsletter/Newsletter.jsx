"use client";

import React, { useState } from "react";
import styles from "./newsletter.module.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const subscribeUser = async (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("❌ Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (data.success) {
        setMessage("✅ Successfully subscribed!");
        setEmail(""); 
      } else {
        setMessage(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setMessage("❌ Subscription failed. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.mainText}>
          Subscribe to Our Free Newsletter For Updates on AI in US Congress
        </h1>
        <form className={styles.submitForm} onSubmit={subscribeUser}>
          <input
            className={styles.inputField}
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter Email Address"
          />
          <button className={styles.submitButton} type="submit">
            Subscribe
          </button>
        </form>
        {message && <p className={styles.message}>{message}</p>} {/* ✅ Show feedback message */}
      </div>
    </div>
  );
};

export default Newsletter;