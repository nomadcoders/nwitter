import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBJU6MmddOEkOP560vFLwhKFVtVz1EzMEA",
  authDomain: "nwitter-1bba1.firebaseapp.com",
  databaseURL: "https://nwitter-1bba1.firebaseio.com",
  projectId: "nwitter-1bba1",
  storageBucket: "nwitter-1bba1.appspot.com",
  messagingSenderId: "556543978252",
  appId: "1:556543978252:web:5fb7e6a2a4560867e5b729",
};

export default firebase.initializeApp(firebaseConfig);
