// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth ,useAuthState} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import {getDatabase,ref} from 'firebase/database'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFx6Ceo4sHc7KaNmPCUU6fHcP9L_fhmes",
  authDomain: "hospital-management-app-87d3c.firebaseapp.com",
  projectId: "hospital-management-app-87d3c",
  storageBucket: "hospital-management-app-87d3c.appspot.com",
  messagingSenderId: "702291939108",
  appId: "1:702291939108:web:ad7c028eb24431c4b6edb1",
  measurementId: "G-RXFWS1ZBB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
// export const db = getDatabase(app);
export const db = getFirestore(app);

export default {app,analytics};
