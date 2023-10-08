import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className='navbar'>
      <Link to='/'><img className='nav-logo' src={logo} alt='logo' /></Link>
      <div className="nav-links">
        {window.innerWidth <= 768 && (
          <span className='toggle-button' onClick={toggleDropdown}>
            &#9776;
          </span>
        )}
        {window.innerWidth > 768 && (
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
    </div>
  );
};

export default Navbar;
