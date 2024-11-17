// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtnRSyWqcLhPR8Z_9USDVGKniJiChx2eQ",
  authDomain: "projectakhir-fa169.firebaseapp.com",
  databaseURL: "https://projectakhir-fa169-default-rtdb.firebaseio.com",
  projectId: "projectakhir-fa169",
  storageBucket: "projectakhir-fa169.firebasestorage.app",
  messagingSenderId: "644598690445",
  appId: "1:644598690445:web:be5fcdbde9e1f4901668c4",
  measurementId: "G-15CTQG4GHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);