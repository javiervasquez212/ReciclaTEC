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
    async signIn(pEmail, pPassword) {
        try {
            const q = query(usersCollection, where("email", "==", pEmail), where("password", "==", pPassword));
            const querySnapshot = await getDocs(q);
            const users = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            if (users.length === 1) {
                alert("Inicio de sesión exitoso.");
                return true;
            }
            else {
                alert("Usuario o contraseña incorrectos.");
                return false;
            }
        }
        catch (error) {
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
    }
}
export default AppServices;