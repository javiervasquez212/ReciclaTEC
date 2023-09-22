import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
      <footer className="footer">
        <p>
        <Link to="/desarrolladores">Desarrolladores</Link>
        </p>
      </footer>
    );
  }
  
