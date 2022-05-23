import { db } from "./FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
export const getGridItemsData = async (uid) => {
  const docRef = doc(db, "usersAppData", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    // console.log(docSnap.data())
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    return false
  }
};
