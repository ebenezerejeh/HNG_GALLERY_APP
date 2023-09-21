// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB4bJ1iYGYKwnH8ydQeNp7yI7TKdSsM_7g",
  authDomain: "hng-gallery-app.firebaseapp.com",
  projectId: "hng-gallery-app",
  storageBucket: "hng-gallery-app.appspot.com",
  messagingSenderId: "571489727746",
  appId: "1:571489727746:web:1606dd3241d7b885e03e1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);