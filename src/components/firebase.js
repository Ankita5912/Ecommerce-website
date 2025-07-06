// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPI4ZBtQDlZaRpE-y-SYmVV3Eb4qRNEkg",
  authDomain: "signup-510ee.firebaseapp.com",
  projectId: "signup-510ee",
  storageBucket: "signup-510ee.appspot.com",
  messagingSenderId: "604213308350",
  appId: "1:604213308350:web:7a902fa093d0dfe088a7ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

