import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`navbar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="nav-header">
        <Link to='/'>
          <img className='nav-logo' src={logo} alt='logo' />
        </Link>
        <span className='toggle-button' onClick={toggleSidebar}>
          &#9776;
        </span>
      </div>
      <nav className="nav-links">
        <ul className='navbar-nav'>
          <li className='nav-item acad-nav-item'>
            <Link to='/' onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li className='nav-item acad-nav-item'>
            <Link to='/course' onClick={toggleSidebar}>
              Course
            </Link>
          </li>
          <li className='nav-item acad-nav-item'>
            <Link to='/about' onClick={toggleSidebar}>
              Campus
            </Link>
          </li>
          <li className='nav-item acad-nav-item'>
            <Link to='/blogs' onClick={toggleSidebar}>
              Blogs
            </Link>
          </li>
          <li className='nav-item acad-nav-item'>
            <Link to='/contact' onClick={toggleSidebar}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
