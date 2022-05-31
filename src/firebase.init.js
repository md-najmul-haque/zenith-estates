// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    REACT_APP_apiKey: process.env.apiKey,
    REACT_APP_authDomain: process.env.authDomain,
    REACT_APP_projectId: process.env.projectId,
    REACT_APP_storageBucket: process.env.storageBucket,
    REACT_APP_messagingSenderId: process.env.messagingSenderId,
    REACT_APP_appId: process.env.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);