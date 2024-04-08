// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqsxLChk60nJ6tDmIK5CSPvvX0cz5_RWI",
  authDomain: "app-91eea.firebaseapp.com",
  databaseURL: "https://app-91eea-default-rtdb.firebaseio.com",
  projectId: "app-91eea",
  storageBucket: "app-91eea.appspot.com",
  messagingSenderId: "195726770763",
  appId: "1:195726770763:web:5b459ff310f0fe70a703ce",
  databaseURL:"https://app-91eea-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);