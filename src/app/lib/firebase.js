// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCG7qDUIuaNq_BoonUgSxZKN8j5lIlJt7E",
    authDomain: "formulario-natielle.firebaseapp.com",
    projectId: "formulario-natielle",
    storageBucket: "formulario-natielle.appspot.com",
    messagingSenderId: "104392145863",
    appId: "1:104392145863:web:d7beb092f9f84d0694f7e2",
    measurementId: "G-QLL8RGWY75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and export it
const db = getFirestore(app);
export { db };
