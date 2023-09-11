import React from 'react'
import './InicialNavigation.css'
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <header>
      <nav className='InicialNav'>
        <a href= '/' className='site-title'> Recicla-Tec</a>
        <ul>
          <li className='links'> <Link to="/login">Log In</Link> </li>
          <li className='links'> <Link to="/signUp">Sign up</Link> </li>
        </ul>
      </nav>
    </header>
  );
}
