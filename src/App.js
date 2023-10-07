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
          <Route path='/course' element={<Common />} />
        </Routes>

        {/* footer starts here */}
        <div className='footer'>
          <div className='footer-logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='footer-contact'>
            <h4 className='footer-text'>New Delhi, Delhi</h4>
            <h4 className='footer-text2'>
              Phone: +91 98202 67890<br />
              Email: xyz1223444531@gmail.com
            </h4>
          </div>
          <div className='footer-links'>
            <h6 className='footer-text4'>FAQ</h6>
            <h6 className='footer-text4'>Events</h6>
            <h6 className='footer-text4'>Privacy Policy</h6>
          </div>
          <h6 className='footer-text3'>
            © 2021 Palate Culinary Academy. All Rights Reserved.
          </h6>
        </div>
        {/* footer ends here */}
      </div>
    </Router>
  );
}

export default App;
