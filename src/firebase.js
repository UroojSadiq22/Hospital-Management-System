// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth ,useAuthState} from "firebase/auth";
import {getDatabase,ref} from 'firebase/database'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyABefIUTgUeLMXqv4S85dsLxwpTCQO2Y4o",
  // authDomain: "my-first-project-hms.firebaseapp.com",
  // projectId: "my-first-project-hms",
  // storageBucket: "my-first-project-hms.appspot.com",
  // messagingSenderId: "510051155239",
  // appId: "1:510051155239:web:0efdac85a76d6e0a147d02",
  // measurementId: "G-SHC5L27Y18"
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
export const db = getDatabase(app);

export default {app,analytics};
