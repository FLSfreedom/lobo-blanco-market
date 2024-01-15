
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0iMjjH_PTkcd1Nx56QHa5yZ8I41ekJ60",
  authDomain: "lobo-blanco-market.firebaseapp.com",
  projectId: "lobo-blanco-market",
  storageBucket: "lobo-blanco-market.appspot.com",
  messagingSenderId: "924504718260",
  appId: "1:924504718260:web:d97cbd198c819e8274d0e1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };