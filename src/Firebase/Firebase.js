// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Database } from "lucide-react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA42Zy2hFfhWAEnQArsfCP6kkeBHxh1R2s",
  authDomain: "campus-182bd.firebaseapp.com",
  projectId: "campus-182bd",
  storageBucket: "campus-182bd.firebasestorage.app",
  messagingSenderId: "470791344188",
  appId: "1:470791344188:web:59dc31c27d03dbbf837339",
  measurementId: "G-TK43FQL6C6",
  databaseURL:"https://campus-182bd-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app=initializeApp(firebaseConfig);