// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOOJQLBshnPg_PfgwZJ0Nm98nsLUIrf3k",
  authDomain: "warehouse-management-9909d.firebaseapp.com",
  projectId: "warehouse-management-9909d",
  storageBucket: "warehouse-management-9909d.appspot.com",
  messagingSenderId: "40135457119",
  appId: "1:40135457119:web:17136d643cbb22caf71eea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;