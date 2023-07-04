import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBFnrIXJC55nNb3UJ1C6IJuSoAuOX9Ve5U",
  authDomain: "imagens-594f4.firebaseapp.com",
  databaseURL: "https://imagens-594f4-default-rtdb.firebaseio.com",
  projectId: "imagens-594f4",
  storageBucket: "imagens-594f4.appspot.com",
  messagingSenderId: "381797482771",
  appId: "1:381797482771:web:674e9e8711f00b18ce9ae6",
  measurementId: "G-YX40P26082"
};

const app = initializeApp(firebaseConfig);


export default app