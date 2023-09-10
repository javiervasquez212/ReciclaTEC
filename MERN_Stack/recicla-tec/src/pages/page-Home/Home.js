import React, { Component } from 'react'
import InicialNavigation from '../../components/componente-inicialNav/InicialNavigation.js'
import Footer from '../../components/componente-footer/Footer.js'

export default class Home extends Component {
  render() {
    return (
      <div>
        <InicialNavigation/>
        <div>
        <a href="https://linktr.ee/GaselTEC_Ambiente"><img src={require('../../Imagenes/Foto-Gasel.png')} alt="Logo" /></a>
        </div>
        <Footer/>
      </div>
      
    );
  }
}