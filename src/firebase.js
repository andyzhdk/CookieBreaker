// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFaObN4p78EcUNNNcmBs00Hu4LWNcR4ws",
  authDomain: "artcosplay-6e0ba.firebaseapp.com",
  databaseURL: "https://artcosplay-6e0ba.firebaseio.com",
  projectId: "artcosplay-6e0ba",
  storageBucket: "artcosplay-6e0ba.appspot.com",
  messagingSenderId: "983357034893",
  appId: "1:983357034893:web:f85109b2369c77fa38adc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);