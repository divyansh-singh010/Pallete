import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './logo.png';
import './navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <div className='navbar'>
      <Link to='/'>
        <img className='nav-logo' src={logo} alt='logo' />
      </Link>
      <div className="nav-links">
        {window.innerWidth <= 768 && (
          <span className='toggle-button' onClick={toggleDropdown}>
            &#9776;
          </span>
        )}
        {window.innerWidth > 768 && (
          <nav>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className={`nav-item acad-nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                <Link to='/' className='nav-link'>
                  Home
                </Link>
              </li>
              <li className={`nav-item acad-nav-item ${location.pathname === '/course' ? 'active' : ''}`}>
                <Link to='/course' className='nav-link'>
                  Course
                </Link>
              </li>
              <li className={`nav-item acad-nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
                <Link to='/about' className='nav-link'>
                  Campus
                </Link>
              </li>
              <li className={`nav-item acad-nav-item ${location.pathname === '/blogs' ? 'active' : ''}`}>
                <Link to='/blogs' className='nav-link'>
                  Blogs
                </Link>
              </li>
              <li className={`nav-item acad-nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                <Link to='/contact' className='nav-link'>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Navbar;
