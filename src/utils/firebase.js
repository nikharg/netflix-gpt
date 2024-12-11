// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4Nu9DWjGtdccaoN27oEwHj1A8eNc9cGs",
  authDomain: "netflix-gpt-15e08.firebaseapp.com",
  projectId: "netflix-gpt-15e08",
  storageBucket: "netflix-gpt-15e08.firebasestorage.app",
  messagingSenderId: "1095711720811",
  appId: "1:1095711720811:web:e37c5ee4013a5e1dd6b82e",
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
