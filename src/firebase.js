// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   databaseURL:process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyCLjdKLRK1mA9cAHt7JWA_JadYZ7IT8qlQ",
  authDomain: "fb-act09.firebaseapp.com",
  databaseURL: "https://fb-act09-default-rtdb.firebaseio.com",
  projectId: "fb-act09",
  storageBucket: "fb-act09.firebasestorage.app",
  messagingSenderId: "793263335707",
  appId: "1:793263335707:web:fab90149d5d074b23f8bbe",
  measurementId: "G-RHZ973KGB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database, ref, set, onValue };
