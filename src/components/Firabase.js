// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyI14eHmNoqhfNWfkwN6Cek9xf7_3EsbI",
  authDomain: "mi-proyect-caprichito01.firebaseapp.com",
  projectId: "mi-proyect-caprichito01",
  storageBucket: "mi-proyect-caprichito01.appspot.com",
  messagingSenderId: "961306057363",
  appId: "1:961306057363:web:d80613ed365bfa0cd0cb66",
  measurementId: "G-WXRXBYV6LW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)


