import { db } from "../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
const getVisitorRequests = async (house, block) => {
  let invites = [];
  try {
    const invitesRef = collection(db, "house_visitors");
    const q = query(
      invitesRef,
      where("house_no.block", "==", block),
      where("house_no.house", "==", house)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      invites.push({ ...doc.data(), id: doc.id });
    });
  } catch (e) {
    console.log(e);
  }
  console.log({ invites });
  return invites;
};
export default getVisitorRequests;
// // // Create a reference to the cities collection
// import { collection, query, where } from "firebase/firestore";
// const citiesRef = collection(db, "cities");

// // Create a query against the collection.
// const q = query(citiesRef, where("state", "==", "CA"));
