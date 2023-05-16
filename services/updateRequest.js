import { updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
const updateRequest = async (requestId, status) => {
  const requestRef = doc(db, "house_visitors", requestId);
  await updateDoc(requestRef, {
    status: status,
  });
};
export default updateRequest;
