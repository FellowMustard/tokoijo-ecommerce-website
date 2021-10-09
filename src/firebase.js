import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDwsm2sh6GMc9j3RLId_lRkHr343Aj_YWA",
  authDomain: "tokoijo-55274.firebaseapp.com",
  databaseURL:
    "https://tokoijo-55274-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tokoijo-55274",
  storageBucket: "tokoijo-55274.appspot.com",
  messagingSenderId: "766350731539",
  appId: "1:766350731539:web:f99b929dcbb7fcbcf712e6",
  measurementId: "G-8VMBW2QEP0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
