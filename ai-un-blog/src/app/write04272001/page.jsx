"use client";

import dynamic from 'next/dynamic';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React, { useEffect, useState } from 'react';
import styles from "./writePage.module.css";
import Image from 'next/image';
import 'react-quill-new/dist/quill.snow.css';
import { app } from "../../../utils/firebase"
import { useMemo } from 'react';
import Quill from 'quill';


const Font = Quill.import('formats/font');
Font.whitelist = ['sans', 'serif', 'monospace', 'gabarito']; 
Quill.register(Font, true);


// Dynamically import react-quill with SSR disabled
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

const storage = getStorage(app);

const WritePage = () => {

  //API Fields
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  
  //Menu
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    const upload = () => {
      const name = new Date().getTime + file.name;
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
          // Handle unsuccessful uploads
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };
    file && upload();
  },[file])

  const handleImageUpload = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (!file) return;

      // Upload to Firebase
      const storageRef = ref(storage, `images/${Date.now()}_${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          console.error("Upload failed:", error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          // Insert the uploaded image into React Quill
          const quill = document.querySelector(".ql-editor");
          if (quill) {
            quill.focus();
            const range = window.getSelection()?.anchorOffset || 0;
            const quillEditor = quill.__quill; // Get the Quill instance
            quillEditor.insertEmbed(range, "image", downloadURL);
          }
        }
      );
    };
  };

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, false] }],
        [{ 'font': Font.whitelist }],
        ['bold', 'italic', 'underline'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link', 'image'], // Enable image button
        [{ 'align': [] }],
      ],
      handlers: {
        image: handleImageUpload, // Custom image upload handler
      },
    },
  }), []);



  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^/w/s-]/g, "")
      .replace(/[\s_-]/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    if (!media) {
      console.log("Image is still uploading. Please wait...");
      return;
    }
    
    const res = await fetch("/api/posts", {
      method:"POST",
      body:JSON.stringify({
        slug: slugify(title),
        title,
        desc: description,
        body, 
        img: media,
        catSlug: "generativeai",
        }),
      });
      console.log(res)
    };

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} onChange={e=>setTitle(e.target.value)}/>
      <input type="text" placeholder="Description" className={styles.descriptionInput} onChange={e=>setDescription(e.target.value)}/>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/asset/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input type="file" id="image" onChange={e=>setFile(e.target.files[0])} style={{ display: "none" }}/>
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/asset/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/asset/video.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/asset/external.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill className={styles.textArea} theme='snow' value={body} onChange={setBody} modules={modules} placeholder="Tell your story..."/>
      </div>
      <button className={styles.publish} onClick={handleSubmit}>Publish</button>
    </div>
  );
};

export default WritePage;