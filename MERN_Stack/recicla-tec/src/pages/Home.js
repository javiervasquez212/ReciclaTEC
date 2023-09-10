import React, { Component } from 'react'
import { datosDesarrolladores } from '../Datos/DatosIniciales'; // Importa los datos
import ComponenteDesarrollador from '../components/componente-desarrollador/ComponenteDesarrollador.js'
import InicialNavigation from '../components/InicialNavigation.js'

export default class Home extends Component {
  render() {
    return (
      <div className='contenedor-developer'>
        <InicialNavigation />
        <h1>¿Por qué es importante Reciclatec para los desarrolladores?</h1>
        {datosDesarrolladores.map((desarrollador, index) => (
          <ComponenteDesarrollador key={index} {...desarrollador} />
        ))}
      </div>
    )
  }
}
