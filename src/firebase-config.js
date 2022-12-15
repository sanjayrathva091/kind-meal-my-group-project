// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6se10YOqlEc7ckboOnr_mFGGa2elbqgY",
    authDomain: "kindmealmy.firebaseapp.com",
    projectId: "kindmealmy",
    storageBucket: "kindmealmy.appspot.com",
    messagingSenderId: "850658187028",
    appId: "1:850658187028:web:e7675a1430dfde65f71401"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
