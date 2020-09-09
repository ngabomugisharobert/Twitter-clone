import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAcH0hAfje8MW-gJzz90D_1XA-V7BPONCU",
  authDomain: "twitter-clone-5c8d6.firebaseapp.com",
  databaseURL: "https://twitter-clone-5c8d6.firebaseio.com",
  projectId: "twitter-clone-5c8d6",
  storageBucket: "twitter-clone-5c8d6.appspot.com",
  messagingSenderId: "672966057660",
  appId: "1:672966057660:web:f9e31ba9941ce580203ab9",
  measurementId: "G-GK5V1J48EB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db