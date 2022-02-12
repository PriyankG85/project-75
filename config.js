import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDPOdKP8Y1_DLPUJyh88KHbVpa-Z5aslJI",
  authDomain: "project-71-1d2bd.firebaseapp.com",
  projectId: "project-71-1d2bd",
  storageBucket: "project-71-1d2bd.appspot.com",
  messagingSenderId: "733786959955",
  appId: "1:733786959955:web:3ee3880099cd704dbd56a6",
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
