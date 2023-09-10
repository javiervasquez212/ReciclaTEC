import React from 'react'
import './InicialNavigation.css'
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
      <nav className='InicialNav'>
        <a href= '/' className='site-title'> Recicla-Tec</a>
        <ul>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/signUp">Sign up</Link>
          </li>
        </ul>
      </nav>
    );
}
