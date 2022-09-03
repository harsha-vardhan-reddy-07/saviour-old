import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBrX_A-F05d85ETT79nL-_RhX93DCZXlq8",
  authDomain: "saviour-network.firebaseapp.com",
  projectId: "saviour-network",
  storageBucket: "saviour-network.appspot.com",
  messagingSenderId: "214368256524",
  appId: "1:214368256524:web:c13ca821debc86de916429",
  measurementId: "G-C9T2B0P2FG"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;