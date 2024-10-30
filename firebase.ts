// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAqSGTBajBnNPnBzMFoohac47vqZ8K1_o8',
  authDomain: 'notion-clone-4ea00.firebaseapp.com',
  projectId: 'notion-clone-4ea00',
  storageBucket: 'notion-clone-4ea00.appspot.com',
  messagingSenderId: '721324889705',
  appId: '1:721324889705:web:1e526e13649e7a9b36f4f8',
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
export { db };
