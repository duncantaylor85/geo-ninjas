import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey:
    "AIzaSyBjD5F0-ZHBGNJbn08WUUzZBuCPplu1m4c",
  authDomain: "geo-ninjas-cfc96.firebaseapp.com",
  databaseURL:
    "https://geo-ninjas-cfc96.firebaseio.com",
  projectId: "geo-ninjas-cfc96",
  storageBucket: "geo-ninjas-cfc96.appspot.com",
  messagingSenderId: "438670471897",
  appId:
    "1:438670471897:web:7f1bc14f028cb483d444c8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// utils

const db = firebase.firestore();
const auth = firebase.auth();

// collection references

const usersCollection = db.collection("users");

export { db, auth, usersCollection };
