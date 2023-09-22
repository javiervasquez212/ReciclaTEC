import React, { Component } from "react";
import NavSalida from "../../components/componente-navSalida/NavSalida.js";
import Footer from "../../components/componente-footer/Footer.js";
import "./menuHamburger.css";
import { firestore } from "../../Firebase";
import { addDoc, collection } from "@firebase/firestore";
export default class menuHamburguer extends Component {
  render() {
    return (
      <>
        <NavSalida />
        <div className="opciones">
          <div className="vistas">
            <h2>Vistas</h2>
            <ul>
              <li>
                <a href="/main">Reciclar materia</a>
              </li>
              <li>
                <a href="/">Ver historial</a>
              </li>
            </ul>
          </div>
          <div className="sistema">
            <h2>Sistema</h2>
            <ul>
              <li>
                <a href="/perfil">Cerrar sesión</a>
              </li>
              <li>
                <a href="/perfil">Iniciar Sesión</a>
              </li>
              <li>
                <a href="/perfil">Registrarse</a>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
