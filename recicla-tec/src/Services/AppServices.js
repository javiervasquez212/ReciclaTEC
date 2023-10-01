import { db } from "../Database/Firebase";
import {
    getDocs,
    getDoc,
    collection,
    query,
    where,
    doc,
    addDoc,
    updateDoc,
    deleteDoc,
    arrayUnion,
  } from "firebase/firestore";
const usersCollection = collection(db, "users");
const AppServices = {
    async getUsers(){
        try{
            const q = query(usersCollection);
            const querySnapshot = await getDocs(q);
            const users = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }));
            return { users};
    
        }
        catch (error){
            console.log("Error getting users: ", error);
        }
    },
    async registerUser(username, email, password){
        try{
            await addDoc(usersCollection, {
                username: username,
                email: email,
                password: password,
            });
            alert("Registro exitoso.");
        }
        catch (error){
            console.log("Error: ", error);
            alert("Ocurrió un error. ");
        }
    }
}
export default AppServices;