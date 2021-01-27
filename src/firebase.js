import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUjvyHw6Gm_BFUV4yFUFrCb4SLb8pS1nA",
  authDomain: "whatsapp-clone-react-firebase.firebaseapp.com",
  projectId: "whatsapp-clone-react-firebase",
  storageBucket: "whatsapp-clone-react-firebase.appspot.com",
  messagingSenderId: "662625329660",
  appId: "1:662625329660:web:df2a02cc7b79abf9a65279",
  measurementId: "G-SK4TL2NY9Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
