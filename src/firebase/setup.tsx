// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN2PvR4HS718pcetje9w07n-e0Icr6vvU",
  authDomain: "swiggy-clone-54311.firebaseapp.com",
  projectId: "swiggy-clone-54311",
  storageBucket: "swiggy-clone-54311.appspot.com",
  messagingSenderId: "493391874475",
  appId: "1:493391874475:web:aee8ac585c063bedfa6aee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);