// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK7uTcdzw5lYkzNpVE2jQD63Yy6BX-S2w",
  authDomain: "game-hub-425b9.firebaseapp.com",
  projectId: "game-hub-425b9",
  storageBucket: "game-hub-425b9.firebasestorage.app",
  messagingSenderId: "352435163529",
  appId: "1:352435163529:web:372860cdd05650a3ecd158"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);