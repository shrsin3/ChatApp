// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5EVZAjeGyKwaLOwAnZg_m6jqupwU6OTE",
    authDomain: "chatapp-82948.firebaseapp.com",
    projectId: "chatapp-82948",
    storageBucket: "chatapp-82948.appspot.com",
    messagingSenderId: "976434206683",
    appId: "1:976434206683:web:401dd3b508a5a340c839fe",
    measurementId: "G-L8MTPEVLE6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
const analytics = getAnalytics(app);