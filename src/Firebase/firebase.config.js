// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCXBd0HX_0BCZALG_6VoumfPJhArx_b4c",
  authDomain: "auth-privateroute.firebaseapp.com",
  projectId: "auth-privateroute",
  storageBucket: "auth-privateroute.appspot.com",
  messagingSenderId: "478378843857",
  appId: "1:478378843857:web:79cd0603068df7aed42ff0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
