// Import only what we need from the modular SDK (v9+)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// TODO: replace these with your Firebase project config values
const firebaseConfig = {
  apiKey: "AIzaSyCuAY4nY6gdUbrKN1elXrGTGX-pTR1a0bY",
  authDomain: "buyshoal.firebaseapp.com",
  projectId: "buyshoal",
  storageBucket: "buyshoal.firebasestorage.app",
  messagingSenderId: "948339055101",
  appId: "1:948339055101:web:718c3f805697087c26a194"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
