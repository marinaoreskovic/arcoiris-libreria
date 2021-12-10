// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWS9ma0b47-ygbsIgg7wWt-47ODfA5fF0",
  authDomain: "arcoiris-ecommerce.firebaseapp.com",
  projectId: "arcoiris-ecommerce",
  storageBucket: "arcoiris-ecommerce.appspot.com",
  messagingSenderId: "1063563092193",
  appId: "1:1063563092193:web:7c6971da8729817b4dd7a0",
  measurementId: "${config.measurementId}",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
