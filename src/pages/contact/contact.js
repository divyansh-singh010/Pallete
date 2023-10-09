import React from "react";
import ellipse from "./ellipse.png";
import "./contact.css";

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    return (
        <div className="form-container">
            <h2 className='heading'>For Enquiries</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className='label' htmlFor="name">Name</label>
                    <input className='input' type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label className='label' htmlFor="email">Email</label>
                    <input className='input' type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label className='label' htmlFor="subject">Subject</label>
                    <input className='input' type="text" id="subject" name="subject" required />
                </div>
                <div className="submit-btn">
                    <button type="submit" className='btn'>Submit</button>
                </div>
            </form>
        </div>
    );
};

// {/* contact us page starts */ }
const Contact = () => {
    return (
        <div>
<h2 className='blog-head'>Contact Us</h2>
<img src={ellipse} alt='ellipse' className='ellipse'></img>
<div className='text-container-new'></div>
<div className='contact-container1'>
    <div className='contact-subcontainer1'>
        <div className='contact-subcontainer2'>
            <div className='contact-subcontainer3'>
                <h2 className='contact-head'>Address</h2>
                <div className='contact-subcontainer4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus tincidunt ipsum,  </div>
                {/* <hr className='vertical-rule'></hr> */}
            </div>
            <div className='contact-subcontainer3'>
                <h2 className='contact-head'>Contact Info</h2>
                <div className='contact-subcontainer4'>Mobile - 9820295221 / 8356934119<br></br>
                    Email - culinaryacademy.com </div>
            </div>
        </div>
    </div>
</div>
<ContactForm />
<div className="social-icons">
    <div className="socials-container">
        <h2 className="socials-heading">Socials</h2>
    </div>
    <div className="icon-container">
        <a href="https://www.instagram.com/palateculinary/?hl=en" target="_blank" rel="noopener noreferrer">
            <svg className='svgs' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="instagram"><linearGradient id="a" x1="1.464" x2="14.536" y1="14.536" y2="1.464" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFC107"></stop><stop offset=".507" stop-color="#F44336"></stop><stop offset=".99" stop-color="#9C27B0"></stop></linearGradient><path fill="url(#a)" d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"></path><linearGradient id="b" x1="5.172" x2="10.828" y1="10.828" y2="5.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFC107"></stop><stop offset=".507" stop-color="#F44336"></stop><stop offset=".99" stop-color="#9C27B0"></stop></linearGradient><path fill="url(#b)" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"></path><linearGradient id="c" x1="11.923" x2="12.677" y1="4.077" y2="3.323" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFC107"></stop><stop offset=".507" stop-color="#F44336"></stop><stop offset=".99" stop-color="#9C27B0"></stop></linearGradient><circle cx="12.3" cy="3.7" r=".533" fill="url(#c)"></circle></svg>
        </a>
        <a href="https://m.facebook.com/comediscoverjoyofcooking/" target="_blank" rel="noopener noreferrer">
            <svg className='svgs' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="facebook"><path fill="#1976D2" d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"></path><path fill="#FAFAFA" fill-rule="evenodd" d="M13.5 8H11V6c0-.552.448-.5 1-.5h1V3h-2a3 3 0 0 0-3 3v2H6v2.5h2V16h3v-5.5h1.5l1-2.5z" clip-rule="evenodd"></path></svg>
        </a>
        <a href="https://www.youtube.com/@chefrakheevaswani" target="_blank" rel="noopener noreferrer">
            <svg className='svgs' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="youtube"><g fill-rule="evenodd" clip-rule="evenodd"><path fill="#F44336" d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438z"></path><path fill="#FAFAFA" d="M6 11.5v-6l5 3z"></path></g></svg>
        </a>
    </div>
</div>
</div>
    )
}

export default Contact;