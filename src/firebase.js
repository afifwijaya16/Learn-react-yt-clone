import firebase from "firebase/app";

import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC46ynK3gZsvaU4vKjzF3_2wpMJvK8Ilpo",
  authDomain: "yt-clone-by-afif.firebaseapp.com",
  projectId: "yt-clone-by-afif",
  storageBucket: "yt-clone-by-afif.appspot.com",
  messagingSenderId: "80808881479",
  appId: "1:80808881479:web:0231976686acff9b79f062",
  measurementId: "G-29BYE22M0J",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
