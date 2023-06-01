import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzhp_E-AzyuitnXGRyneAhWOE-9frMLxY",
  authDomain: "fitness-showcase.firebaseapp.com",
  projectId: "fitness-showcase",
  storageBucket: "fitness-showcase.appspot.com",
  messagingSenderId: "547231573374",
  appId: "1:547231573374:web:0424b7fcc62007968d7f2f",
};

// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export default getFirestore();
