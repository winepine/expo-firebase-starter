import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

const AddAlertSos = async sosObject => {
  const colRef = collection(db, "sos");
  const ref = await addDoc(colRef, sosObject);
};
export { AddAlertSos };
