import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfig = {

  apiKey: "AIzaSyBh36cGPXJH-cyb2giOsJet7VDEKZ3MVsU",
  authDomain: "my-task-hub.firebaseapp.com",
  databaseURL: "https://my-task-hub-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-task-hub",
  storageBucket: "my-task-hub.appspot.com",
  messagingSenderId: "941408350272",
  appId: "1:941408350272:web:a0f5bfc5afbcbbcb3defa5",
  measurementId: "G-485HGNY5X9"
};

export const initializeFirebase = () => {

  const app = initializeApp(firebaseConfig);
  return getDatabase(app);  
}
