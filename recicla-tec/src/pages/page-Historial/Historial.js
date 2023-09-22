import React, { Component } from 'react'
import NavSalida from '../../components/componente-navSalida/NavSalida.js'
import Reglon from '../../components/cmp-Renglon/Renglon.js'
import {datosHisorial, nombresResiduos} from '../../Datos/DatosHistorial.js'
import './Historial.css'


export default class Historial extends Component {
  render() {
    return (
      <div className='componente-historial'>
        <div>
        <NavSalida/>
        </div>
        <div className='titulo-historial'>
          <h1>Historial de reciclaje</h1>
        </div>
        <div className="TituloDatos"> 
        <Reglon {...nombresResiduos[0]} />
        {datosHisorial.map((dato, index) => (
          <Reglon key={index} {...dato} />
        ))}
        </div>
      </div>
    );
  }
}