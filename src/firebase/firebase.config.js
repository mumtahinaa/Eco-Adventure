// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHafMaBZTKvGHVFiTxLU6Do6Ys0rXjbyA",
  authDomain: "eco-asia.firebaseapp.com",
  projectId: "eco-asia",
  storageBucket: "eco-asia.firebasestorage.app",
  messagingSenderId: "1038190102121",
  appId: "1:1038190102121:web:b13cdf4c5475dfff03c4f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;