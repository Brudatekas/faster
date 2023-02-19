// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_61N0Ig3LxREgWd7mkISFizjDfVuYJgI",
  authDomain: "faster-7ca69.firebaseapp.com",
  projectId: "faster-7ca69",
  storageBucket: "faster-7ca69.appspot.com",
  messagingSenderId: "80493121579",
  appId: "1:80493121579:web:f459aabfe8761360439a6e",
  measurementId: "G-R8DDTN7KWH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);