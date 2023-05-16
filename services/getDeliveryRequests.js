import { db } from "../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
const getDeliveryRequests = async (house, block) => {
  let requests = [];
  try {
    const invitesRef = collection(db, "Delivery_Requests");
    const q = query(
      invitesRef,
      where("house_no.block", "==", block),
      where("house_no.house", "==", house)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      requests.push({ ...doc.data(), id: doc.id });
    });
  } catch (e) {
    console.log(e);
  }
  console.log({ requests });
  return requests;
};
export default getDeliveryRequests;
