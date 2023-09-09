import React, { Component } from 'react';
import '../estilos/Login.css'
import { Link } from 'react-router-dom';
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
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className='contenedor-principal'>
        <div className='contenedor-login'>
          <h1>Log In</h1>
          <form>
            <div className='contenedor-user'>
              <input
                type="text"
                placeholder="Email"
                id="username"
                value={username}
                onChange={this.handleUsernameChange} />
                </div>
                <div className='contenedor-password'>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={this.handlePasswordChange} />
                </div>
                <div className='button-container'>
                  <button type="button" onClick={this.handleLogin}>
                  Iniciar sesión
              </button>
                </div>
            
            <p>
              ¿Not a member? <Link to="/signUp">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
