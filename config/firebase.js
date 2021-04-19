import firebase from "firebase";
require("firebase/firestore");

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyDvngC5PtGBVX7YMg0xoxP0O6CrffFWTPI",
  authDomain: "mohammed-nea-68dba.firebaseapp.com",
  databaseURL: "https://mohammed-nea-68dba.firebaseio.com",
  projectId: "mohammed-nea-68dba",
  storageBucket: "mohammed-nea-68dba.appspot.com",
  messagingSenderId: "556581590962",
  appId: "1:556581590962:web:3c1d7664026688dc75f6ab"
};
// Initialize Firebase

firebase.initializeApp(config);

const db = firebase.firestore();

//Need to add this to forgo deprecated warnings
// db.settings({
//   timestampsInSnapshots: true
// });

export default db;
