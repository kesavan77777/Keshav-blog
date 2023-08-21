// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJBWq6ib7nU-OwJjhOx1l060dPGcDgV6o",
  authDomain: "keshav-e5310.firebaseapp.com",
  projectId: "keshav-e5310",
  storageBucket: "keshav-e5310.appspot.com",
  messagingSenderId: "15763667603",
  appId: "1:15763667603:web:c62d61c92e5d0325cc2b66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
export default app;
//export default db;