"use client";

import React, { useState } from 'react';
import styles from "./writePage.module.css";
import Image from 'next/image';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';


// Dynamically import react-quill with SSR disabled


const WritePage = () => {
  const {status} = useSession();
  const router = useRouter();

  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // This ensures navigation happens only after the render
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]); // Runs when `status` changes

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input}/>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/asset/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/asset/image.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/asset/video.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/asset/external.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill className={styles.textArea} theme='snow' value={content} onChange={setContent} placeholder="Tell your story..."/>
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;