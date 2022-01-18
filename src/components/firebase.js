import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBQ16S3EsMMMuhCW9qYgZk93bwvPzoIUH4",
    authDomain: "reactapp-proyecto-final.firebaseapp.com",
    projectId: "reactapp-proyecto-final",
    storageBucket: "reactapp-proyecto-final.appspot.com",
    messagingSenderId: "195930928132",
    appId: "1:195930928132:web:e2a8f77cf4e951cc20f151"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)