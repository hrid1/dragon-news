// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjzqJsFarkyRhHy4B-Ftx5vgskr43X_f4",
  authDomain: "dragon-news-auth-66317.firebaseapp.com",
  projectId: "dragon-news-auth-66317",
  storageBucket: "dragon-news-auth-66317.appspot.com",
  messagingSenderId: "728152875984",
  appId: "1:728152875984:web:004cdc3b1b65c2d7accfd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);