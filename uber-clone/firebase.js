import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyA4QmzzsG1MAX1a6bCFDF1ghNVbs_Ge99Y",
    authDomain: "rn-uber-eat-7e9cc.firebaseapp.com",
    projectId: "rn-uber-eat-7e9cc",
    storageBucket: "rn-uber-eat-7e9cc.appspot.com",
    messagingSenderId: "879915129622",
    appId: "1:879915129622:web:f134f48c7b87c8f1bd4e37"
  };

  !firebase.apps.length? firebase.initializeApp(firebaseConfig) : firebase.app();
  export default firebase;