// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-afba5.firebaseapp.com",
  projectId: "blog-afba5",
  storageBucket: "blog-afba5.firebasestorage.app",
  messagingSenderId: "749439515398",
  appId: "1:749439515398:web:ba71aa73a3cb1ad51a3c87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };