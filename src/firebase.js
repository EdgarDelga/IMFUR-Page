// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBaSf3dzqEPt_N2gSQHQnDgHB3XGO60CE",
  authDomain: "imfur-oficial.firebaseapp.com",
  projectId: "imfur-oficial",
  storageBucket: "imfur-oficial.appspot.com",
  messagingSenderId: "172459009192",
  appId: "1:172459009192:web:807a7aa7aeec8001174e9d",
  measurementId: "G-2EPFTWJYKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);