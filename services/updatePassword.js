// Update Password In Firebase
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
export const updatePassword = async (password, docId) => {
  const requestRef = doc(db, "houses", docId);
  await updateDoc(requestRef, {
    password: password,
    status: "Active",
  });
};
