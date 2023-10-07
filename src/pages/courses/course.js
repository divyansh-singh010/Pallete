import React from "react";
import "./course.css";
import homebg from "./home_bg.svg";

const Course = ({ course }) => {
    return (
        <>
            <img className='home-bg' src={homebg} alt='profile' />
            <div className='course-bg-text-container'>
            <h3 className='course-bg-text'>Courses</h3>
            </div>
            <div className='text-container1'>
                <h3 className='course-bg-text1'>one day workshops</h3>
                <h4 className='course-bg-text2'>Workshop Schedule</h4>
                <h4 className='course-bg-text2'>Workshop Schedule</h4>
            </div>
            <div className='text-container1'>
                <h3 className='course-bg-text1'>one day workshops</h3>
                <h4 className='course-bg-text2'>Workshop Schedule</h4>
                <h4 className='course-bg-text2'>Workshop Schedule</h4>
            </div>
            <hr className='rule rule-1'></hr>
            <div className='text-container2'>
                <h3 className='course-bg-text1 text-subcontainer'>one day workshops</h3>
                <h4 className='course-bg-text2 text-subcontainer'>Workshop Schedule</h4>
                <h4 className='course-bg-text2 text-subcontainer'>Workshop Schedule</h4>
            </div>
            <div className='text-btn'>
                <button className='course-btn'>
                    HOW TO APPLY
                </button>
            </div>
            <div>
            </div>
        </>
    );
}

export default Course;