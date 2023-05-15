import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
const verifyUserLogin = async (email, password) => {
  console.log(email, password);
  let user = null;
  const querySnapshot = await getDocs(collection(db, "houses"));
  querySnapshot.forEach(doc => {
    if (doc.data().owner_name == email && doc.data().password == password) {
      console.log("User Found");
      console.log(doc.data());
      user = doc.data();
    }
  });
  return user;
};
export default verifyUserLogin;
