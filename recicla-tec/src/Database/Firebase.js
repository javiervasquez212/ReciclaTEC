// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3-eeD_pT9DYgp56P2Vk4O7g791HNmG4k",
  authDomain: "reciclatec-a8235.firebaseapp.com",
  projectId: "reciclatec-a8235",
  storageBucket: "reciclatec-a8235.appspot.com",
  messagingSenderId: "951783811533",
  appId: "1:951783811533:web:22e1c8565f423aadb33c84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
