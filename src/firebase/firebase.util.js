//Pull in the firebase utililty library. /app because we dont want to pull everything
import firebase from "firebase/app";
//These imports will be automatically attached to above keyword
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyBcbTULG8vDSQeeTlXCDF2BWc6ofg732Ug",
  authDomain: "ecommerce-backend-3bac3.firebaseapp.com",
  databaseURL: "https://ecommerce-backend-3bac3.firebaseio.com",
  projectId: "ecommerce-backend-3bac3",
  storageBucket: "ecommerce-backend-3bac3.appspot.com",
  messagingSenderId: "315481460304",
  appId: "1:315481460304:web:3df67f6f7c788cb40e0b55",
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
