//import logo from './logo.svg';
import './App.css';
//import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
//import Login from './components/Login.js'
//import SignUp from './components/SignUp.js'
//import Navigation from './components/Navigation.js'
import Inicial from './components/Inicial.js'


// <Navigation/>
//<Routes>
// <Route path="/Login" component={<Login/>}/>
//<Route path="/SignUp" component={<SignUp/>}/>
// </Routes>
//
function App() {
 return (
    <div className='App'>
        <div className='contenedor-principal'>
            <h1>Por qué es Importante reciclatec para los desarrolladores </h1>
            <Inicial 
            nombre='Mario Barboza'
            cargo='Estudiante Ing en Computación'
            texto='El reciclaje no es solo una opción, es nuestra responsabilidad hacia el planeta.'
            imagen='Mario'
            extensionImagen='jpg'/>
            <Inicial
            nombre='Axel Chaves'
            cargo='Estudiante Ing en Computación'
            texto='Cada botella de plástico que reciclamos es un paso hacia un futuro más limpio y sostenible'
            imagen='Axel'
            extensionImagen='png'/>
            <Inicial
            nombre='Javier Vazquez'
            cargo='Estudiante Ing en Computación'
            texto='Reduce, reutiliza, recicla: las tres "R" que marcan la diferencia en la conservación del medio ambiente.'
            imagen='Javi'
            extensionImagen='png'/>
            <Inicial
            nombre='Camilo Sanchez'
            cargo='Estudiante Ing en Computación'
            texto='El reciclaje no solo beneficia a la Tierra, también contribuye a crear empleos y a conservar nuestros recursos naturales.'
            imagen='Camilo'
            extensionImagen='png'/>
        </div>
    </div>
 );
}

export default App;
