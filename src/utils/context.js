import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqSkTUDQWjjYfXYWSvhBnkLqKxgRneV4k",
  authDomain: "it-step-students-chat.firebaseapp.com",
  projectId: "it-step-students-chat",
  storageBucket: "it-step-students-chat.appspot.com",
  messagingSenderId: "275700780177",
  appId: "1:275700780177:web:924508a1aa53c366374330",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

const AppContext = createContext();
export const useApp = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ firebase, auth, firestore }}>
      {children}
    </AppContext.Provider>
  );
};
