import React from "react";
import ellipse from "./ellipse.png";
import './blog.css';

const Blogs = () => {
    return (
        <div>
            <h2 className='blog-head'>Blogs</h2>
            <img src={ellipse} alt='ellipse' className='ellipse'></img>
            <div className='text-container-new'>
                <h3 className='course-bg-text1 text-subcontainer-new'>Culinary Tips from the Celebrity Chef</h3>
                <h4 className='course-bg-text2 text-subcontainer-new'>vulputate vitae velit ut, dapibus tincidunt dui. Vestibulum scelerisque eget massa nec faucibus. Sed pellentesque venenatis tincidunt. Maecenas at mattis quam, bu</h4>
            </div>
            <div className='text-container-new'>
                <h3 className='course-bg-text1 text-subcontainer-new'>Student Success Stories</h3>
                <h4 className='course-bg-text2 text-subcontainer-new'>vulputate vitae velit ut, dapibus tincidunt dui. Vestibulum scelerisque eget massa nec faucibus. Sed pellentesque venenatis tincidunt. Maecenas at mattis quam, bu</h4>
            </div>
            <div className='text-container-new'>
                <h3 className='course-bg-text1 text-subcontainer-new'>Industry Trends</h3>
                <h4 className='course-bg-text2 text-subcontainer-new'>vulputate vitae velit ut, dapibus tincidunt dui. Vestibulum scelerisque eget massa nec faucibus. Sed pellentesque venenatis tincidunt. Maecenas at mattis quam, bu</h4>
            </div>
            <div className='text-container-new4'>
                <div className='text-container-new1'></div>
                <div className='text-container-new2'></div>
                <div className='text-container-new3'></div>
                <h3 className='gallery'>gallery</h3>
            </div>
        </div >
    );
}

export default Blogs;