import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
      <footer className="footer">
        <ul>
          <li> <Link to="/desarrolladores">Devs</Link> </li>
          
        </ul>
      </footer>
    );
  }
  
