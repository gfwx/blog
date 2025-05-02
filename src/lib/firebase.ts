import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD28B9laNFU97zC9rjFh6vf-LeB-QfgtC0",
  authDomain: "gfwx-5afdb.firebaseapp.com",
  projectId: "gfwx-5afdb",
  storageBucket: "gfwx-5afdb.firebasestorage.app",
  messagingSenderId: "1045318123293",
  appId: "1:1045318123293:web:56b9061d90c296d13f6bf4"
};

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore();
