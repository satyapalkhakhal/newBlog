import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD6AGMYP2R6ypzMeYTonDI_GavH2qCxKqs",
    authDomain: "reactblogproject-b4b61.firebaseapp.com",
    databaseURL: "https://reactblogproject-b4b61-default-rtdb.firebaseio.com",
    projectId: "reactblogproject-b4b61",
    storageBucket: "reactblogproject-b4b61.appspot.com",
    messagingSenderId: "7674533027",
    appId: "1:7674533027:web:a351d12107d8c5807fdb16"
  };
  const app = initializeApp(firebaseConfig);
  export const db=getFirestore(app);