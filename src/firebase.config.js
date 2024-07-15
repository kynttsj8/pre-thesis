// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBtXr5wDYxaTP3q4IKGMy1-aewYlpclPg",
  authDomain: "onlile-job-portal-941fb.firebaseapp.com",
  projectId: "onlile-job-portal-941fb",
  storageBucket: "onlile-job-portal-941fb.appspot.com",
  messagingSenderId: "342802015241",
  appId: "1:342802015241:web:aaca87807d1c9abe5f84d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};