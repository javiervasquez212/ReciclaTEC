import React from 'react'
import './NavPrincipal.css'

export default function Navigation() {
  return (
    <div className='principal'>
      <nav className='NavPrincipal'>
        <div className="divEspacio">
        <a href="https://linktr.ee/GaselTEC_Ambiente" className="cmp-Imagen"><img className='mediana' src={require('../../Imagenes/Foto-Gasel.png')} alt="LogoGasel" /></a>
        <a  href="/" className="tituloNav">Recicla-Tec</a>
        
        <a href="/menu" className="cmp-Imagen"><img className='pequenna' src={require('../../Imagenes/Foto-Hamburguer.png')} alt="LogoMenu" /></a>
        <a href="https://www.instagram.com/gaseltec/?hl=es" className="cmp-Imagen"><img className='pequenna' src={require('../../Imagenes/Foto-IG.png')} alt="LogoIGGasel" /></a>
        </div>
      
      </nav>
    </div>
  );
}   

