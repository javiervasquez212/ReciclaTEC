import React, { Component } from 'react'
import './mainPage.css'
import TextInput from '../../components/componente-EntradaTexto/componenteEntradaTexto.js'
import Button from '../../components/Buttons/Button.js'
export default class mainPage extends Component {
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
        <div>
            <div className='componente-encabezado'>
            <h1>Recicla-Tec</h1>
            <a href="https://www.instagram.com/gaseltec/?hl=es"> <img src={require('../../Imagenes/Foto-IG.png')} alt="Instagram" /> </a>
            <a href="/menu"> <img src={require('../../Imagenes/Foto-Hamburguer.png')} alt="Menu Hamburguesa" /> </a>

            </div>
            <div className='componente-medio'>
            
            <h1>Reciclar materiales </h1>
            <p>Cada envase reciclado es un paso hacia un mundo más sostenible</p>
            <TextInput inputType = 'text'
            inputValue = {material}
            inputClassname= "componente-busqueda"
            placeholder="Buscar material"
            handleOnChange={this.handleMaterialChange}/>

            <TextInput inputType = 'text'
            inputValue = {kilos}
            inputClassname= "componente-kilos"
            placeholder="Kilos"
            handleOnChange={this.handleKilosChange}/>

            <Button buttonClassname = "boton-anaranjado"
            buttonText = "Reciclar"
            handleOnChange={this.handleReciclar}/>

            </div>
            <div className='componente-final'>
            <h1>Material reciclado</h1>

            <img src={require('../../Imagenes/Foto-Dona.png')} alt="Dona" />
            </div>

        </div>
      )
    }
  }