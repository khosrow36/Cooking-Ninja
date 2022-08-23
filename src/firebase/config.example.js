import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  //put your config here
  //rename this file to config.js
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
