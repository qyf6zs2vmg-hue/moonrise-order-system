import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, onSnapshot, query, updateDoc, deleteDoc, writeBatch } from "firebase/firestore";

// Auto-generated config
import config from '../firebase-applet-config.json';

// FIREBASE CONFIG PLACEHOLDER
// ЗАМЕНИТЬ НА СВОИ FIREBASE ДАННЫЕ
// const firebaseConfig = {
//   apiKey: "PASTE_HERE",
//   authDomain: "PASTE_HERE",
//   projectId: "PASTE_HERE",
//   storageBucket: "PASTE_HERE",
//   messagingSenderId: "PASTE_HERE",
//   appId: "PASTE_HERE"
// };

const firebaseConfig = {
  ...config,
  databaseURL: undefined // not needed for firestore usually
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, config.firestoreDatabaseId);

export { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, collection, doc, setDoc, getDoc, getDocs, onSnapshot, query, updateDoc, deleteDoc, writeBatch };
