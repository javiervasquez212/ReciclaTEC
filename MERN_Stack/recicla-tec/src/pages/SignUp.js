import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
      <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre completo:
          <input
            type="text"
            name="nombreCompleto"
            value={formData.nombreCompleto}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            name="contrasena"
            value={formData.contrasena}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Registrarse</button>
      </form>
    </div>
    )
  }
}
