// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb20GcfbKKt7WD6PyzyMf6c5WGEZUF51A",
  authDomain: "zing-mp3-a1771.firebaseapp.com",
  projectId: "zing-mp3-a1771",
  storageBucket: "zing-mp3-a1771.appspot.com",
  messagingSenderId: "280595756786",
  appId: "1:280595756786:web:2f9e474ca19c2dcb94c26b",
  measurementId: "G-V59NQRKMJH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
