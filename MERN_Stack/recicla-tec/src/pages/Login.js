import React, { Component } from 'react';
import '../estilos/Login.css'
import { Link } from 'react-router-dom';
import Button from '../components/Buttons/Button.js';
import TextInput from '../components/componente-EntradaTexto/componenteEntradaTexto';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleLogin = () => {
    const { username, password } = this.state;
    // Aquí debes implementar la lógica de autenticación
    // Puedes enviar los datos al servidor y verificar la autenticación
    console.log(`Usuario: ${username}, Contraseña: ${password}`);
    return(
      <div> hola</div>
    )
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className='contenedor-principal'>
        <div className='contenedor-login'>
          <h1>Iniciar Sesión</h1>
          <form>
            <div className='contenedor-user'>
                <TextInput inputClassname="contenedor-user"
                inputType="text"
                inputValue={username}
                placeholder="Email"
                handleOnChange={this.handleUsernameChange}
                />
              </div>
              <div className='contenedor-password'>
                <TextInput inputClassname="contenedor-password"
                inputType="password"
                inputValue={password}
                placeholder="Contraseña"
                handleOnChange={this.handlePasswordChange} />

                </div>
                <div>
                <Button buttonClassname="boton-anaranjado" 
                  buttonText="Iniciar sesión"
                  handleOnClick={this.handleLogin}/>
                </div>

            <p>
              ¿No tienes una cuenta? <Link to="/signUp">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
