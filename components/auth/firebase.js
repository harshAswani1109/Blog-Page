import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDFW_1Rz0Lw_JbKDiissNJ-QcTlJDMRecM",
  authDomain: "blogpage-6d857.firebaseapp.com",
  projectId: "blogpage-6d857",
  storageBucket: "blogpage-6d857.appspot.com",
  messagingSenderId: "261046670131",
  appId: "1:261046670131:web:cdb99a99646b99a307a446",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
