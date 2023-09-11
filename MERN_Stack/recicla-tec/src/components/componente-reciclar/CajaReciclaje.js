import React, { Component } from 'react'
import TextInput from '../componente-EntradaTexto/componenteEntradaTexto.js'
import Button from '../Buttons/Button.js'
import './CajaReciclaje.css'

export default class CajaReciclaje extends Component {
    constructor(props) {
        super(props);
        this.state = {
          material: '',
          kilos: '',
        };
      }
      handleMaterialChange = (event) => {
        this.setState({ material: event.target.value });
      };
      handleKilosChange = (event) => {
        this.setState({ kilos: event.target.value });
      };
      handleReciclar = () => {
        const { material, kilos } = this.state;
        // Aquí debes implementar la lógica de autenticación
        // Puedes enviar los datos al servidor y verificar la autenticación
        console.log(`Material: ${material}, Kilos: ${kilos}`);
      };
  render() {
    const { material, kilos } = this.state;
    return (
      <div className='componente-medio'>
            <h1 className='titulo-reciclaje'>
                Reciclar materiales 
            </h1>
            <p className='parrafo-reciclaje'>
                Cada envase reciclado es un paso hacia un mundo más sostenible
            </p>
            <div className='boton-entradas'>
            <select
          value={material}
          onChange={this.handleMaterialChange}
          className='componente-busqueda-material'
        >
          <option value='' disabled selected>Selecciona un material</option>
          <option value='Papel'>Papel</option>
          <option value='Plástico'>Plástico</option>
          <option value='Vidrio'>Vidrio</option>
          {/* Agrega más opciones según tus necesidades */}
        </select>

            <TextInput inputType = 'text'
            inputValue = {kilos}
            inputClassname= "kilos"
            placeholder="Kilos"
            handleOnChange={this.handleKilosChange}/>

            <Button buttonClassname = "boton-anaranjado2"
            buttonText = "Reciclar"
            handleOnChange={this.handleReciclar}/>
    </div>
     </div>
    )
  }
}
