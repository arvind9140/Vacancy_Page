import 'firebase/compat/firestore'
import firebase from'firebase/compat/app'


const firebaseConfig = {
    apiKey: "AIzaSyDNyk7ZcVNDF_67P3esNwpb9UgbsP6LWd8",
    authDomain: "vacancy-page.firebaseapp.com",
    projectId: "vacancy-page",
    storageBucket: "vacancy-page.appspot.com",
    messagingSenderId: "500686121956",
    appId: "1:500686121956:web:3a14212d207a5ce05af5f1",
    measurementId: "G-YHX16646V3"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();


  export {db};
 
  