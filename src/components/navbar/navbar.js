import React, { useState } from 'react';
import { NavLink,Link } from 'react-router-dom'; // Import NavLink
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
      <Link to='/' activeClassName='active-link'><img className='nav-logo' src={logo} alt='logo' /></Link>
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
                <NavLink to='/' activeClassName='active-link'>Home</NavLink>
              </li>
              <li className='nav-item acad-nav-item'>
                <NavLink to='/course' activeClassName='active-link'>Course</NavLink>
              </li>
              <li className='nav-item acad-nav-item'>
                <NavLink to='/about' activeClassName='active-link'>Campus</NavLink>
              </li>
              <li className='nav-item acad-nav-item'>
                <NavLink to='/blogs' activeClassName='active-link'>Blogs</NavLink>
              </li>
              <li className='nav-item acad-nav-item'>
                <NavLink to='/contact' activeClassName='active-link'>Contact</NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
