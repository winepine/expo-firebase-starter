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
const deleteVehicles = async (allVehicles, numberplate, docId) => {
  console.log("allVehicles", allVehicles);
  console.log("numberplate", numberplate);
  console.log("docId", docId);
  // remove numberplate from allvehicles array
  const updatedVehicles = allVehicles.filter(
    vehicle => vehicle.numberplate !== numberplate
  );

  const requestRef = doc(db, "houses", docId);
  await updateDoc(requestRef, {
    vehicles: updatedVehicles,
  });
};
export default deleteVehicles;
