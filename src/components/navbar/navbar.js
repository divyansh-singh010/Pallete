import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`navbar ${isDropdownOpen ? 'open' : ''}`}>
      <Link to='/'>
        <img className='nav-logo' src={logo} alt='logo' />
      </Link>
      <span className='toggle-button' onClick={toggleDropdown}>
        &#9776;
      </span>
      <nav className={`nav-links ${isDropdownOpen ? 'open' : ''}`}>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link to='/' onClick={toggleDropdown}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/course' onClick={toggleDropdown}>
              Course
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' onClick={toggleDropdown}>
              Campus
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/blogs' onClick={toggleDropdown}>
              Blogs
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' onClick={toggleDropdown}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
