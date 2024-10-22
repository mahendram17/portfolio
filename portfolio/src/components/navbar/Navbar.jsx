import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Navbar.css'; // Link to the CSS file for Navbar styling

function Navbar() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/signin");
  };
  return (
    <nav className="navbar">
      <div className="logo">RM</div>
      <ul className="nav-links">
        <li><Link to="/">About me</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="contactme" >Contact me</Link></li>
        {/* Conditionally render Logout button if authenticated */}
        {isAuthenticated ? (
          <li>
            <button onClick={handleLogout} style={{color:"white"}}>Logout</button>
          </li>
        ) : (
          <li><Link to="/signin">Sign In</Link></li>
        )}
      </ul>
     
    </nav>
  );
}

export default Navbar;
