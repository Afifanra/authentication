// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOsvDvK_4FEMavFAhY2U4UMTbCSCv2kzU",
    authDomain: "afif-green.firebaseapp.com",
    projectId: "afif-green",
    storageBucket: "afif-green.appspot.com",
    messagingSenderId: "332206793839",
    appId: "1:332206793839:web:f2e0279566023d20e1599a",
    measurementId: "G-XQD9TSERT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);