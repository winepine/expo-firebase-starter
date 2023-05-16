// Fetch Staff From Firebase and filter according to house
import { db } from "../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
const getHouseStaff = async (house, block) => {
  let staff = [];
  try {
    const staffRef = collection(db, "staff");
    const querySnapshot = await getDocs(staffRef);
    querySnapshot.forEach(doc => {
      doc.data().house_no.forEach(house_no => {
        if (house_no.block === block && house_no.house === house) {
          staff.push({ ...doc.data(), id: doc.id });
        }
      });
    });
  } catch (e) {
    console.log(e);
  }
  console.log({ staff });
  return staff;
};
export default getHouseStaff;
