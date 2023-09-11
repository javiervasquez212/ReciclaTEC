import React, { Component } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import Button from '../../components/Buttons/Button.js';
import TextInput from '../../components/componente-EntradaTexto/componenteEntradaTexto';
import InicialNavigation from '../../components/componente-inicialNav/InicialNavigation.js'
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      password2: '',
    };
  }
  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePassword2Change = (event) => { 
    this.setState({ password2: event.target.value });
  };

  handleSignUp = () => {
    const { username, password, email, password2 } = this.state;
    // Aquí debes implementar la lógica de autenticación
    // Puedes enviar los datos al servidor y verificar la autenticación
    console.log(`Usuario: ${username}, Contraseña: ${password}, Email: ${email}, Confirmar contraseña: ${password2}`);
    return(
      <div> hola</div>
    )
  };

  render() {
    const { username, email, password, password2 } = this.state;
    return (
      <div>
      <InicialNavigation />
      <div className='contenedor-principal'> 
        <div className='contenedor-login'>  
          <h1 className='titulo-sign-up'>Registrarse</h1>
          <form>
            <TextInput className="loginBoxes"
                inputType="text"
                inputValue={username}
                placeholder="Nombre completo"
                handleOnChange={this.handleUsernameChange}
                />
            <TextInput className="loginBoxes"
                inputType="text"
                inputValue={email}
                placeholder="Correo electrónico"
                handleOnChange={this.handleEmailChange}
                />
            <TextInput className="loginBoxes"
                inputType="password" 
                inputValue={password}
                placeholder="Contraseña"
                handleOnChange={this.handlePasswordChange}
                />
            <TextInput className="loginBoxes"
                inputType="password"
                inputValue={password2}
                placeholder="Confirmar contraseña"
                handleOnChange={this.handlePassword2Change}
                />
            <Button buttonClassname="boton-anaranjado"
              buttonText="Registrarse"
              handleOnClick={this.handleSignUp}/>
            <p>
              ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
            </p>
          </form>
        </div>
      </div>
      </div>
    )
  }
}
