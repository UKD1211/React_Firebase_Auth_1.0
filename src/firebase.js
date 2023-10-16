import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEdfsf1qheZVbRkHHQTKK6AKhDBjOceBg",
  authDomain: "fir-auth-669.firebaseapp.com",
  projectId: "fir-auth-669",
  storageBucket: "fir-auth-669.appspot.com",
  messagingSenderId: "298789649783",
  appId: "1:298789649783:web:bf158c4c304f16bf467572",
  measurementId: "G-4KRM0CN5QS",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app,auth};
