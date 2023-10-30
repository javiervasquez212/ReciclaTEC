import { db } from "../Database/Firebase";
import {
    getDocs,
    collection,
    query,
    addDoc,
    where,
} from "firebase/firestore";
const usersCollection = collection(db, "users");
const recycledItemsCollection = collection(db, "recyclingLog");
const mesesEnum = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'Aug',
    9: 'Sept',
    10: 'Oct',
    11: 'Nov',
    12: 'Dic',
};
function obtenerColorParaMaterial(material) {
    const colores = {
        'Plástico': '#235434',
        'Vidrio': '#3a7658',
        'Papel': '#a7dcb2',
        'Metal': '#81be4d',
        'Café': '#c1e1b9',
        'Electrónicos': '#e9f5db',
        'Cartón': '#f7f7f7',
    };
    return colores[material] || '#000000'; // Si el material no tiene un color asignado, se usa negro
}

const AppServices = {
    async getUserCollection() {
        return usersCollection;
    },

    async getRecycledItemsCollection() {
        return recycledItemsCollection;
    },

    async signIn(pEmail, pPassword) {
        try {
            const data = await getDocs(usersCollection);
            const users = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            if (users.length === 0) {
                console.log("No hay usuarios");
                return false;
            }
            for (let i in users) {
                if (users[i].email === pEmail && users[i].password === pPassword) {
                    console.log("Usuario encontrado", users[i]);
                    return true;
                }
            }
            return false;
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
            // validar que no hayan usernames y emails repetidos
            const data = await getDocs(usersCollection);
            const users = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            for (let i in users) {
                if (users[i].username === username) {
                    alert("El nombre de usuario ya existe");
                    return;
                }
                if (users[i].email === email) {
                    alert("El correo electrónico ya existe");
                    return;
                }
            }
            await addDoc(usersCollection, {
                username: username,
                email: email,
                password: password,
            });
            alert("Registro exitoso.");
        }
        catch (error) {
            console.log("Error: ", error);
            alert("Ocurrió un error");
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
    async obtenerDatosPorMes() {
        const añoActual = new Date().getFullYear();
        const consulta = query(
            collection(db, 'recyclingLog'),
            where('date', '>=', `${añoActual}-01-01`),
            where('date', '<=', `${añoActual}-12-31`)
        );

        const querySnapshot = await getDocs(consulta);

        const datosPorMes = new Array(12).fill(0);

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const fecha = new Date(data.date);
            const mes = fecha.getMonth() + 1;
            const cantidad = parseFloat(data.quantity);

            if (!isNaN(cantidad)) {
                datosPorMes[mes - 1] += cantidad; // Restamos 1 para que los meses comiencen en 0
            }
        });

        const resultado = datosPorMes.map((quantity, month) => ({ quantity, month: mesesEnum[month + 1] }));

        // console.log(resultado);
        return resultado;
    },

    async obtenerTop5Materiales() {
        const consulta = query(collection(db, 'recyclingLog'));
        const querySnapshot = await getDocs(consulta);
        const datosPorMaterial = {};

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const material = data.material;
            const cantidad = parseFloat(data.quantity);

            if (!isNaN(cantidad)) {
                if (datosPorMaterial[material]) {
                    datosPorMaterial[material].value += cantidad;
                } else {
                    datosPorMaterial[material] = {
                        id: Object.keys(datosPorMaterial).length,
                        value: cantidad,
                        label: material,
                        color: obtenerColorParaMaterial(material),
                    };
                }
            }
        });

        // Ordena los materiales por cantidad en orden descendente
        const top5Materiales = Object.values(datosPorMaterial)
            .sort((a, b) => b.value - a.value)
            .slice(0, 5); // Obtén los primeros 5 elementos

        console.log(top5Materiales);
        return top5Materiales;
    },
}
export default AppServices;