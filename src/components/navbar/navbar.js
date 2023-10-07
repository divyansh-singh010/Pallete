import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./navbar.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='navbar'>
      <Link to='/'>
        <img className='nav-logo' src={logo} alt='logo' />
      </Link>
      <span className='toggle-button' onClick={toggleDropdown}>
        &#9776;
      </span>
      <div className={`nav-links ${isDropdownOpen ? 'open' : ''}`}>
        <nav>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to='/'><b>Home</b></Link>
            </li>
            <li className='nav-item'>
              <Link to='/course'><b>Course</b></Link>
            </li>
            <li className='nav-item'>
              <Link to='/about'><b>Campus</b></Link>
            </li>
            <li className='nav-item'>
              <Link to='/blogs'><b>Blogs</b></Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact'><b>Contact</b></Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
