// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxNZL0GsqWo0bchXr0PwS38BpJfMvRICs",
  authDomain: "pleasingstorereactflex.firebaseapp.com",
  projectId: "pleasingstorereactflex",
  storageBucket: "pleasingstorereactflex.appspot.com",
  messagingSenderId: "1075055501217",
  appId: "1:1075055501217:web:b5444ac8fe08f8ad43b5e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)