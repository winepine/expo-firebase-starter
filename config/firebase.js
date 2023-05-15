import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
// add firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCq7RM1bbIoVjKIe8JIAtrIlmDpbcccqcU",
  authDomain: "smentry-eb556.firebaseapp.com",
  projectId: "smentry-eb556",
  storageBucket: "smentry-eb556.appspot.com",
  messagingSenderId: "1009468391663",
  appId: "1:1009468391663:web:bb54ffef31acc87b051b1a",
  measurementId: "G-MJWZ0YQVRH",
};

// initialize firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// initialize auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth, db };
