// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBypi32blovL3RX6YihmHMDGf1BYD7OPIo",
  authDomain: "allergens-3a08c.firebaseapp.com",
  projectId: "allergens-3a08c",
  storageBucket: "allergens-3a08c.appspot.com",
  messagingSenderId: "653456669023",
  appId: "1:653456669023:web:8a8c7e8fb47616cf601eea",
  measurementId: "G-4YY7KGHF89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);