import { getAuth} from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNrGsVPuE8XBIh5-2knbIimfbZvXNnTiE",
  authDomain: "netflixai-65de5.firebaseapp.com",
  projectId: "netflixai-65de5",
  storageBucket: "netflixai-65de5.appspot.com",
  messagingSenderId: "520746724046",
  appId: "1:520746724046:web:b88bab67a2d9c0b9c6fe9f",
  measurementId: "G-0E6P08J9XE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();