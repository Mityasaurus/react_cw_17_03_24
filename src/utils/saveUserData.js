import firebase from "firebase/compat/app";
import "firebase/compat/database";

export function addUserDB(user) {
  const authUser = {
    uid: user.uid,
    name: user.displayName,
    email: user.email,
    photoUrl: user.photoURL,
  };
  const userCollection = firebase.firestore().collection("users");
  userCollection.add(authUser);
}
