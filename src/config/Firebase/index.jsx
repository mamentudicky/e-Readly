// Import Firebase SDK yang diperlukan
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database"; // Import untuk Realtime Database

// Konfigurasi Firebase
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

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Realtime Database
const database = getDatabase(app);

// Fungsi untuk membaca data dari Firebase
export const readData = async (id) => {
  try {
    const dataRef = ref(database, `books/${id}`); // Pastikan path-nya sesuai dengan struktur database Anda
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error("Error reading data:", error);
    throw error;
  }
};

// Fungsi untuk memperbarui data di Firebase
export const updateData = async (id, data) => {
  try {
    const dataRef = ref(database, `books/${id}`); // Path ke lokasi data
    await set(dataRef, data);
    console.log("Data updated successfully!");
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};
