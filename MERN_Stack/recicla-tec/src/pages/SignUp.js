import React, { Component } from 'react'
import '../estilos/Login.css'
import { Link } from 'react-router-dom';
export default class SignUp extends Component {
  
  constructor(props) {
    this.state = {
      fullName: "",
      email: "",
      password: "",
    };
  }

  handleFullNameChange = (event) => {
    this.setState({
      fullName: event.target.value
    })
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  render() {
    return (
      <div className="contenedorPrincipal">
        <div className="contenedorSignUp"> 
          <h1>Sign Up</h1>  
          <form>
            <div className="contenedorNombre">
              <input
              type="text"
              placeholder='Nombre Completo'
              id='fullName'
              value={this.fullName}
              onChange={this.handleFullNameChange}/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
