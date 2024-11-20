// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database"; // Import untuk Realtime Database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtnRSyWqcLhPR8Z_9USDVGKniJiChx2eQ",
  authDomain: "projectakhir-fa169.firebaseapp.com",
  databaseURL: "https://projectakhir-fa169-default-rtdb.firebaseio.com", // URL untuk Realtime Database
  projectId: "projectakhir-fa169",
  storageBucket: "projectakhir-fa169.firebasestorage.app",
  messagingSenderId: "644598690445",
  appId: "1:644598690445:web:be5fcdbde9e1f4901668c4",
  measurementId: "G-15CTQG4GHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Realtime Database
const db = getDatabase(app); // Realtime Database instance

// Ekspor db agar bisa digunakan di file lain
export { db };
