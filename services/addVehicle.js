import { updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
const addVehicle = async houseObject => {
  const requestRef = doc(db, "houses", houseObject.id);
  await updateDoc(requestRef, {
    ...houseObject,
  });
  return;
  try {
    firestore()
      .collection("houses")
      .doc(houseObject.id)
      .update(houseObject)
      .then(() => {
        console.log("Updated Successfully!");
      });
  } catch (e) {
    console.log(e);
  }
};
export { addVehicle };
