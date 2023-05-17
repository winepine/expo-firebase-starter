import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

const AddNotification = async notificationData => {
  const docRef = await addDoc(
    collection(db, "notifications"),
    notificationData
  );
  return docRef;
};
export { AddNotification };
