import React from 'react'
import './NavSalida.css'

export default function Navigation() {
  return (
    <header className='salida'>
      <nav className='NavSalida'>
      <a href="/"><img className='pequena' src={require('../../Imagenes/Foto-X.png')} alt="Logo" /></a>
      </nav>
    </header>
  );
}   
