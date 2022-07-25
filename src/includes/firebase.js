import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBjFG3Yll6PRxaAmm7VhfUMnx17tW4rUi8",
  authDomain: "music-9967c.firebaseapp.com",
  projectId: "music-9967c",
  storageBucket: "music-9967c.appspot.com",
  messagingSenderId: "686363516512",
  appId: "1:686363516512:web:105e1beb7b8801a0332d05",
  measurementId: "G-CSHK554JQ1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`firebase persistence error ${error.code}`);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');
export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
}