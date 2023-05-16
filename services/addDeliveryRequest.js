// Add request to firestore
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
const addDeliveryRequest = async requestName => {
  const colRef = collection(db, "Delivery_Requests");
  const ref = await addDoc(colRef, requestName);
};
export default addDeliveryRequest;
