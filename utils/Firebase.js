// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { ReactNativeFirebase } from "@react-native-firebase/app";  
//import firebaseConfig from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVYw3pWS2_uNjKQ2m9djUjyI_fvUlCFB0",
    authDomain: "dolar-app-frb.firebaseapp.com",
    projectId: "dolar-app-frb",
    storageBucket: "dolar-app-frb.appspot.com",
    messagingSenderId: "99946452201",
    appId: "1:99946452201:web:5ad83252e7fd3471a0cc78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default initializeApp(firebaseConfig);