import React from 'react';
import logo from './logo.png';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/contact/contact';
import Blogs from './pages/blog/blog';
import About from './pages/aboutus/about';
import Course from './pages/courses/course';
import Home from './pages/home/home';
import Navbar from './components/navbar/navbar';

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
            <table className='tables'>
              <tbody>
                <tr>
                  <td><h6 className='footer-text4'>FAQ</h6></td>
                </tr>
                <tr>
                  <td><h6 className='footer-text4'>Events</h6></td>
                </tr>
                <tr>
                  <td><h6 className='footer-text4'>Privacy Policy</h6></td>
                </tr>
              </tbody>
            </table>
          </div>
          <h6 className='footer-text3'>
            © 2023 Palate Culinary Academy. All Rights Reserved.
          </h6>
        </div>
        {/* footer ends here */}
      </div>
    </Router>
  );
}

export default App;
