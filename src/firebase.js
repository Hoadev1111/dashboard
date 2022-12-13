import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "dashboard-865a5.firebaseapp.com",
  projectId: "dashboard-865a5",
  storageBucket: "dashboard-865a5.appspot.com",
  messagingSenderId: "207758793205",
  appId: "1:207758793205:web:297ee3a601d228649f68bc",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
