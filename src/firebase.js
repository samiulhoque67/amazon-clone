import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAGuzKoLRGKs22DHUyyukrpUIkAWtNSq1A",
  authDomain: "challenge-f681c.firebaseapp.com",
  databaseURL: "https://challenge-f681c.firebaseio.com",
  projectId: "challenge-f681c",
  storageBucket: "challenge-f681c.appspot.com",
  messagingSenderId: "377185166291",
  appId: "1:377185166291:web:83d9ef331094477c420526",
  measurementId: "G-DF95XGJN8M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };