import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Link to the CSS file for Navbar styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">TG</div>
      <ul className="nav-links">
        <li><Link to="/">About me</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><a href="contactme">Contact me</a></li>
      </ul>
     
    </nav>
  );
}

export default Navbar;
