// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDxIUPhyuwsb1r3dcOR5UQStklVCK0i_tg",
  authDomain: "tinder-clone-b1994.firebaseapp.com",
  projectId: "tinder-clone-b1994",
  storageBucket: "tinder-clone-b1994.appspot.com",
  messagingSenderId: "769403822390",
  appId: "1:769403822390:web:7a53da9bd6eb9026549397",
  measurementId: "G-VPP17ZZ0S4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
