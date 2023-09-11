import React from 'react'
import './Renglon.css'
function mostrarRenglon(props) {
  
  return (
<div className="wrapper">
    <div className="box box1">
      <div className="nested">{props.Fecha}</div>
      <div className="nested">{props.Plastico}</div>
      <div className="nested">{props.Vidrio}</div>
      <div className="nested">{props.Carton}</div>
      <div className="nested">{props.Hojalata}</div>
      <div className="nested">{props.Electronicos}</div>
    </div>
</div>
    
  );
}

export default mostrarRenglon;