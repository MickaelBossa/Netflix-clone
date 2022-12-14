// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhpxWwaa6vrPQ-2PZwhvuydmxrNDvQpnI",
  authDomain: "kamielo-netflix-clone.firebaseapp.com",
  projectId: "kamielo-netflix-clone",
  storageBucket: "kamielo-netflix-clone.appspot.com",
  messagingSenderId: "684313787434",
  appId: "1:684313787434:web:10ce4c3c1686a6fa0b9753"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
