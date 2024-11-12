// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAtnRSyWqcLhPR8Z_9USDVGKniJiChx2eQ",
  authDomain: "projectakhir-fa169.firebaseapp.com",
  projectId: "projectakhir-fa169",
  storageBucket: "projectakhir-fa169.firebasestorage.app",
  messagingSenderId: "644598690445",
  appId: "1:644598690445:web:be5fcdbde9e1f4901668c4",
  measurementId: "G-15CTQG4GHB",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
