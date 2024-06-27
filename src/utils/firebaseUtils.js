import { 
  getDocs, 
  addDoc, 
  collection, 
  doc, 
  updateDoc, 
  deleteDoc 
} from "firebase/firestore";

async function getAllDocuments(db, collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const documents = [];
  querySnapshot.forEach((doc) => {
    documents.push({ id: doc.id, ...doc.data() });
  });
  console.log("documents from", collectionName, documents);

  return documents;
}

async function addDocument(db, collectionName, data) {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document added with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function updateDocument(db, collectionName, id, data) {
  try {
    const docRef = doc(db, collectionName, id);
    if (docRef) {
      await updateDoc(docRef, data);
    } else {
      console.log("No reference to doc found with id:", id);
    }
  } catch (error) {
    console.error("Error updating document: ", error);
  }
}

async function deleteDocument(db, collectionName, id) {
  try {  
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
}

export { getAllDocuments, addDocument, updateDocument, deleteDocument };
