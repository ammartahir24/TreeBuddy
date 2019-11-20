import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmlyixNdwtyOE09HS5nMDAoiJ62VCaLEY",
  authDomain: "treebuddy123.firebaseapp.com",
  databaseURL: "https://treebuddy123.firebaseio.com",
  projectId: "treebuddy123",
  storageBucket: "treebuddy123.appspot.com",
  messagingSenderId: "352354846644",
  appId: "1:352354846644:web:ad742e8a277ea7f13554e1"
};

firebase.initializeApp(firebaseConfig);
let database = firebase.firestore();

module.exports = {
    db: database,
    auth: firebase.auth(),
    firebase : firebase
};