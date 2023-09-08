import React from 'react'
import '../estilos/InicialNavigation.css'
export default function Navigation() {
    return (
      <nav className='InicialNav'>
        <a href= '/' className='site-title'> Recicla-Tec</a>
        <ul>
          <li>
            <a href='/LogIn'>LogIn</a>
          </li>
          <li>
            <a href='/SignUp'>SignUp</a>
          </li>
        </ul>
      </nav>
    );
}
