import React, { Component } from 'react'
import './mainPage.css'
import NavPrincipal from '../../components/cmp-navPrincipal/NavPrincipal.js'
import CajaReciclaje from '../../components/componente-reciclar/CajaReciclaje.js'
export default class mainPage extends Component {

    render() {
      return (
        <>
        <div className='main-page-all'>
          <div> <NavPrincipal/> </div>
          
          <div className='reciclaje-caja'> <CajaReciclaje/> </div>
          
          <div className='componente-final'>
            <h1>Material reciclado</h1>
            <img src={require('../../Imagenes/Foto-Dona.png')} alt="Dona" />
          </div>



        </div>
        
        </>
      )
    }
  }