import React, { Component } from 'react'
import { datosMario, datosAxel,datosJavier,datosCamilo } from '../Datos/DatosIniciales'; // Importa los datos
import ComponenteDesarrollador from '../components/ComponenteDesarrollador.js'
import InicialNavigation from '../components/InicialNavigation.js'
export default class Home extends Component {
  render() {
    return (
        <div className='contenedor-principal'>
        <InicialNavigation/>
        <h1>¿Por qué es importante Reciclatec para los desarrolladores?</h1>
        <ComponenteDesarrollador {...datosMario} />
        <ComponenteDesarrollador {...datosAxel} />
        <ComponenteDesarrollador {...datosJavier} />
        <ComponenteDesarrollador {...datosCamilo} />
    </div>
    )
  }
}
