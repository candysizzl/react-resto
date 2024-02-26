import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDg5-m3cMAdBPDa5ufPpa2DexINyFYYglQ",
  authDomain: "react-utakph.firebaseapp.com",
  projectId: "react-utakph",
  storageBucket: "react-utakph.appspot.com",
  messagingSenderId: "414361781272",
  appId: "1:414361781272:web:ae10312e1040156f606f6d",
  measurementId: "G-989GX9X8WN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
