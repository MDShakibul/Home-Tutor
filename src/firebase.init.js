// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQaD8-3plIJrpmRgqxW76KF7p1U1tqoAs",
  authDomain: "home-tutor-f9e23.firebaseapp.com",
  projectId: "home-tutor-f9e23",
  storageBucket: "home-tutor-f9e23.appspot.com",
  messagingSenderId: "988516367288",
  appId: "1:988516367288:web:1df7fb82080bb83bba2d4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

