import { FirebaseOptions, FirebaseApp, initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBGk0hRfnHyK8ftxhyQ5Hfs69Z6KaUlPUE",
  authDomain: "netflix-clone-1392c.firebaseapp.com",
  projectId: "netflix-clone-1392c",
  storageBucket: "netflix-clone-1392c.appspot.com",
  messagingSenderId: "174415638705",
  appId: "1:174415638705:web:0d0327abe47e9493c7b290",
  measurementId: "G-PG9ZV1GB54",
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);
const auth: Auth = getAuth(app);

export default db;
export { auth };
