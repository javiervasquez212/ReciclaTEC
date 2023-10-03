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
const recycledItemsCollection = collection(db, "recyclingLog");
const AppServices = {
    async signIn(pEmail, pPassword) {
        console.log("correcto");
        try {
            const data = await getDocs(usersCollection);
            const users = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            for (let i in users) {
                if (users[i].email === pEmail && users[i].password === pPassword) {
                    console.log("Usuario encontrado", users[i]);
                    return true;
                }
                return false;
            }
        } catch (error) {
            console.log("Error getting users: ", error);
        }
    },

    async getUsers() {
        try {
            const q = query(usersCollection);
            const querySnapshot = await getDocs(q);
            const users = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            return { users };

        }
        catch (error) {
            console.log("Error getting users: ", error);
        }
    },
    async registerUser(username, email, password) {
        try {
            await addDoc(usersCollection, {
                username: username,
                email: email,
                password: password,
            });
            alert("Registro exitoso.");
        }
        catch (error) {
            console.log("Error: ", error);
            alert("Ocurrió un error. ");
        }
    },

    async addRecycledItem(pItem) {
        try {
            await addDoc(recycledItemsCollection, pItem);
            alert("Registro exitoso.");
            return true;
        } catch (error) {
            console.log("Error: ", error);
            return false;
        }

    },
}
export default AppServices;