
import { initializeApp } from 'firebase/app';

import {getFirestore } from 'firebase/firestore/lite'
import {getAuth} from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import 'firebase/storage'
const app = initializeApp({
  apiKey: "AIzaSyCjk3C18WKOiNY3lmiGfbEdDuZlr5cXaXY",

  authDomain: "music-app-60124.firebaseapp.com",

  projectId: "music-app-60124",

  storageBucket: "music-app-60124.appspot.com",

  messagingSenderId: "162161072364",

  appId: "1:162161072364:web:d02b966fa8cc7f38a46dc9",

  measurementId: "G-VXMJDV5LFB"

});
// const db = 1;
const db = getFirestore(app);
const auth = getAuth(app);
// const auth = firebase.auth();
const storage = getStorage(app);

export { db , auth, storage };