import { initializeApp } from "firebase/app";
// --> Import getFirestore for db
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

// --> Import getAuth for authentication
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFnHB_d1u9H6mEZ695EmBWeRuYW_UleqM",
  authDomain: "review-exam-assist.firebaseapp.com",
  projectId: "review-exam-assist",
  storageBucket: "review-exam-assist.appspot.com",
  messagingSenderId: "601240036316",
  appId: "1:601240036316:web:4d068875ff3f46d9b5e519",
  measurementId: "G-53SDZFX5W3",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
