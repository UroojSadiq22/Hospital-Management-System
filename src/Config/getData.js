import { db } from "../firebase";

import { collection, query, where, getDocs } from "firebase/firestore";

async function getDataToFirestore(name, cnic) {
  //Saving data into Firestore
  try {
    // Reference to the collection
    const collectionRef = collection(db, name);

    // Query to filter documents based on the provided CNIC
    const q = query(collectionRef, where("email", "==", email));

    // Retrieve documents that match the query
    const querySnapshot = await getDocs(q);

    // Iterate over each document in the result
    querySnapshot.forEach((doc) => {
      // Log document data
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error getting documents: ", error);
  }
}
export default getDataToFirestore;