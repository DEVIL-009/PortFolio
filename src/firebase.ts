import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-bxoGcuBilwzJsyYXULzuEJdFFfduU4A",
    authDomain: "portfolio-368d7.firebaseapp.com",
    databaseURL: "https://portfolio-368d7-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "portfolio-368d7",
    storageBucket: "portfolio-368d7.firebasestorage.app",
    messagingSenderId: "976584258530",
    appId: "1:976584258530:web:9cea923c1877b211103fbb",
    measurementId: "G-JTZH8SJSYT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
