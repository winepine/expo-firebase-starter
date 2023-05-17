import { db } from "../config/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
const deleteResidents = async (allResidents, cnic, docId) => {
  // remove numberplate from allvehicles array
  const updatedVehicles = allResidents.filter(houset => houset.cnic !== cnic);

  const requestRef = doc(db, "houses", docId);
  await updateDoc(requestRef, {
    residents: updatedVehicles,
  });
};
export default deleteResidents;
