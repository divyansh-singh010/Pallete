import React, { useState } from 'react';
import logo from './logo.png';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './pages/contact/contact';
import Blogs from './pages/blog/blog';
import About from './pages/aboutus/about';
import Course from './pages/courses/course';
import Home from './pages/home/home';
import Navbar from './components/navbar/navbar';
import Gallery from './pages/gallery/gallery';
import Yearly from './pages/yearly/yearly';
import Hta from './pages/hta/hta';
import Testimonial from './pages/testimonial/testimonial';
import Common from './pages/common/common';

const App = () => {
  return (
    <Router>
      <div>
        {/* navbar starts here */}
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/about' element={<About />} />
          <Route path='/course' element={<Course />} />
        </Routes>

        {/* footer starts here */}
            <div className='footer'>
  <div className='footer-logo'>
    <!-- Logo here -->
  </div>
  <div className='footer-contact'>
    <!-- Contact information here -->
  </div>
  <div className='footer-links-container'>
    <div className='footer-links'>
      <!-- Footer links here -->
    </div>
  </div>
  <h6 className='footer-text3'>
    <!-- Copyright information here -->
  </h6>
</div>

    </Router>
  );
}

export default App;
