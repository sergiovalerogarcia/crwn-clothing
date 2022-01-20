// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm9cEKhcO1Sn6nmlXKFNSAbYyhs8nEdIA",
  authDomain: "crwn-clothing-ca801.firebaseapp.com",
  projectId: "crwn-clothing-ca801",
  storageBucket: "crwn-clothing-ca801.appspot.com",
  messagingSenderId: "942408405526",
  appId: "1:942408405526:web:bbb9a08feca7718da29b37",
  measurementId: "G-YJVK41KCZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore();
export const analytics = getAnalytics(app);
export const signInWithGoogle = () => signInWithRedirect(auth, provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (userAuth) {
  }
}