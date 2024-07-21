import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUserCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { SlGraduation } from "react-icons/sl";
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-icon-container">
        <SlGraduation className="logo-icon" />
        <p className="logo-text">Social Media App</p>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search for friends, groups, pages" className="search-input" />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <div className="icons-container">
        <FontAwesomeIcon icon={faBell} className="navbar-icon" />
        <FontAwesomeIcon icon={faUserCircle} className="navbar-icon" />
      </div>
    </div>
  );
}

export default Navbar;
