// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXciNOJwdPty96-5t59cMDy4FuHuPVn5w",
  authDomain: "a-best-teacher.firebaseapp.com",
  projectId: "a-best-teacher",
  storageBucket: "a-best-teacher.appspot.com",
  messagingSenderId: "420883441816",
  appId: "1:420883441816:web:32af5164dd0368552948ed"

  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;