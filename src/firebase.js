import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCU6ZLzH4GBO2DZ7sbW4Y312h08MO5fEA0",
  authDomain: "nest-shopping-app-bb7af.firebaseapp.com",
  projectId: "nest-shopping-app-bb7af",
  storageBucket: "nest-shopping-app-bb7af.appspot.com",
  messagingSenderId: "1089159197292",
  appId: "1:1089159197292:web:2963dfe505aa5cc029de49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);