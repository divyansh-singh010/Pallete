<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './navbar.css';
=======
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./navbar.css";
>>>>>>> 747eb5002ccace0a2afd271f13b2a3f6ac8080ce

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
<<<<<<< HEAD
    setIsDropdownOpen(prev => !prev);
  };

  return (
    <div className='navbar'>
      <Link to='/'><img className='nav-logo' src={logo} alt='logo' /></Link>
      <div className="nav-links">
        <span className='toggle-button' onClick={toggleDropdown}>
          &#9776;
        </span>
        {isDropdownOpen && (
          <nav>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item acad-nav-item'>
                <Link to='/'>Home</Link>
              </li>
              <li className='nav-item acad-nav-item'>
                <Link to='/course'>Course</Link>
              </li>
              <li className='nav-item acad-nav-item'>
                <Link to='/about'>Campus</Link>
              </li>
              <li className='nav-item acad-nav-item'>
                <Link to='/blogs'>Blogs</Link>
              </li>
              <li className='nav-item acad-nav-item'>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
=======
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img className="nav-logo" src={logo} alt="logo" />
      </Link>
      <span className="toggle-button" onClick={toggleDropdown}>
        &#9776;
      </span>
      <nav className={`nav-links ${isDropdownOpen ? 'open' : ''}`}>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item acad-nav-item">
            <Link to="/">
              <b>Home</b>
            </Link>
          </li>
          <li className="nav-item acad-nav-item">
            <Link to="/course">
              <b>Course</b>
            </Link>
          </li>
          <li className="nav-item acad-nav-item">
            <Link to="/about">
              <b>Campus</b>
            </Link>
          </li>
          <li className="nav-item acad-nav-item">
            <Link to="/blogs">
              <b>Blogs</b>
            </Link>
          </li>
          <li className="nav-item acad-nav-item">
            <Link to="/contact">
              <b>Contact</b>
            </Link>
          </li>
        </ul>
      </nav>
>>>>>>> 747eb5002ccace0a2afd271f13b2a3f6ac8080ce
    </div>
  );
};

export default Navbar;
