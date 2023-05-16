import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

const addInvite = async inviteObject => {
  const colRef = collection(db, "invites");
  const ref = await addDoc(colRef, inviteObject);
};
export { addInvite };
