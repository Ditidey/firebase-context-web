// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1lYK36sLl1QmhYX5Vh9MZJaB_DLkavUw",
  authDomain: "fir-context-daisy.firebaseapp.com",
  projectId: "fir-context-daisy",
  storageBucket: "fir-context-daisy.appspot.com",
  messagingSenderId: "581240071231",
  appId: "1:581240071231:web:4f8de1ee8043fb4956c48a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;