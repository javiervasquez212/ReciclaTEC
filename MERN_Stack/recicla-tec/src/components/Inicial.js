import React from 'react'
import '../estilos/Inicial.css'
function Inicial(props) {
  return (
    <div className='contenedor-persona'>
      <img className='imagen-Persona'
      src={require(`../Imagenes/Foto-${props.imagen}.${props.extensionImagen}`)}
      alt='Foto de Persona' />
      <div className='contenedor-texto-persona'>
        <p className='nombre-persona'>{props.nombre}</p>
        <p className='cargo-persona'>{props.cargo}</p>
        <p className='texto-persona'>{props.texto}</p>
      </div>
    </div>
  );
}

export default Inicial;