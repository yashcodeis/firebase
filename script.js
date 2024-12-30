
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import {getDatabase,ref,set,get,child} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-Database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB-sMTnOJEyugBcEqTv2KmMp1efylLkcb0",
    authDomain: "creativetutorials-d6e38.firebaseapp.com",
    projectId: "creativetutorials-d6e38",
    storageBucket: "creativetutorials-d6e38.appspot.com",
    messagingSenderId: "884525734118",
    appId: "1:884525734118:web:a07f626f7c12717c468327"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
