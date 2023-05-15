import firebase from "firebase/app"
import "firebase/firestore"
// to use login singup data
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDazibtqFLvPxWosPnxDZfvbecO-tz0c3I",
    authDomain: "vue-blog-9e9cb.firebaseapp.com",
    projectId: "vue-blog-9e9cb",
    storageBucket: "vue-blog-9e9cb.appspot.com",
    messagingSenderId: "710465538952",
    appId: "1:710465538952:web:65242be3a54d607787883d"
};

// init firebase 
firebase.initializeApp(firebaseConfig);

// init database 
let db = firebase.firestore();
let auth = firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {db, timestamp, auth}