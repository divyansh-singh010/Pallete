import React from "react";
import ellipse from "./ellipse.png";
import './blog.css';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import { Link } from "react-router-dom";

const Blogs = () => {
    return (
        <div>
            <h2 className='blog-head'>Blogs</h2>
            <img src={ellipse} alt='ellipse' className='ellipse'></img>
            <Link to='/1'><div className='text-container-new'>
                <h3 className='course-bg-text1 text-subcontainer-new'>Culinary Tips from the Celebrity Chef</h3>
                <h4 className='course-bg-text2 text-subcontainer-new'>vulputate vitae velit ut, dapibus tincidunt dui. Vestibulum scelerisque eget massa nec faucibus. Sed pellentesque venenatis tincidunt. Maecenas at mattis quam, bu</h4>
            </div>
            </Link>
            <Link to='/2'>
            <div className='text-container-new'>
                <h3 className='course-bg-text1 text-subcontainer-new'>Student Success Stories</h3>
                <h4 className='course-bg-text2 text-subcontainer-new'>vulputate vitae velit ut, dapibus tincidunt dui. Vestibulum scelerisque eget massa nec faucibus. Sed pellentesque venenatis tincidunt. Maecenas at mattis quam, bu</h4>
            </div>
            </Link>
            <Link to='/3'>
            <div className='text-container-new'>
                <h3 className='course-bg-text1 text-subcontainer-new'>Industry Trends</h3>
                <h4 className='course-bg-text2 text-subcontainer-new'>vulputate vitae velit ut, dapibus tincidunt dui. Vestibulum scelerisque eget massa nec faucibus. Sed pellentesque venenatis tincidunt. Maecenas at mattis quam, bu</h4>
            </div>
            </Link>
            <div className='text-container-new4'>
                <div className='text-container-new1'><img src={img1} alt='img1' className='text-container-new1'></img></div>
                <div className='text-container-new2'><img src={img2} alt='img1' className='text-container-new1'></img></div>
                <div className='text-container-new3'><img src={img3} alt='img1' className='text-container-new1'></img></div>
                <h3 className='gallery'>
                <Link to='/blogs/gallery' className="gallery-link">
                    gallery
                    </Link>
                </h3>
            </div>
        </div >
    );
}

export default Blogs;