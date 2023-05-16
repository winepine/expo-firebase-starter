import { db } from "../config/firebase";
import {
  collection,
  query,
  getDocs,
  where,
  updateDoc,
  addDoc,
} from "firebase/firestore";
const AddStaffDB = async staff => {
  //   console.log(staff);
  const staffRef = collection(db, "staff");
  const q = query(staffRef, where("cnic", "==", staff.cnic));
  try {
    const doc = await getDocs(q);
    // console.log(doc);
    doc.forEach(async doc => {
      console.log(doc.data());
      await updateDoc(doc.ref, {
        house_no: [
          ...doc.data().house_no,
          {
            house: staff.house_no.house_no,
            block: staff.house_no.block,
          },
        ],
      });
    });
    // if (doc.length > 0) {
    //   console.log("Document data Exists:");
    //
    //   return;
    // }
    // add doc
    const addObject = {
      ...staff,
      house_no: [
        {
          house: staff.house_no.house_no,
          block: staff.house_no.block,
        },
      ],
    };
    console.log({ addObject });
    await addDoc(staffRef, addObject);
  } catch (e) {
    console.log("in here", e);
  }
  return;
};
export default AddStaffDB;
