import firebase from "firebase/compat/app";
import "firebase/compat/database";

export function saveUserData(user) {
  return (method) => {
    const userData = {
      nickname: user.displayName,
      uid: user.uid,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      email: user.email,
      photoURL: user.photoURL,
    };

    //отримати дані з firebase.database
  };
}
