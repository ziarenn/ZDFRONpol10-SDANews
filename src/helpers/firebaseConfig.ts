import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD5AjeSHwoCGY_3O3niAL8qeAmD5KETlKc",
  authDomain: "zdfronpol10-sdanews.firebaseapp.com",
  projectId: "zdfronpol10-sdanews",
  storageBucket: "zdfronpol10-sdanews.appspot.com",
  messagingSenderId: "444183504730",
  appId: "1:444183504730:web:6c89e6b4250aa6bd33f563",
  measurementId: "G-TN2S3VH4C2",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const firestore = getFirestore(app);
