import React from "react";
import './about.css';
import img1 from './3.png';
import img2 from './4.png';
import img3 from './kitchen.jpg';
import img4 from './dining.jpg';
import img5 from './3new.jpg';

const About = () => {
    return (<div>
            <div className='about-us-box'>
                <h3 className='about-us-boxtext'>About Us</h3>
            </div>
        <div className='about-us-container1'>
            <div className='about-us-img'>
                <img src={img1} className="about-us-img" alt="norefer"/>
            </div>
            <div className='about-us-text'>
                <p className='about-us-para'>Palate Culinary Academy is an International culinary and pastry arts education, driven by the vision of Celebrity chef Rakhee Vaswani, Our outstanding courses are tailored for your goals, offering hands-on training for Bachelor students, professionals, career-changers and entrepreneurs. Led by experienced chefs and industry experts, you’ll take your skills to a world-class standard and build a strong foundation for success in the global food and beverage industry. </p>
            </div>
        </div>
        <div className='about-us-container1'>
            <div className='about-us-text kl'>
                <p className='about-us-para'>Palate Culinary Academy is an International culinary and pastry arts education, driven by the vision of Celebrity chef Rakhee Vaswani, Our outstanding courses are tailored for your goals, offering hands-on training for Bachelor students, professionals, career-changers and entrepreneurs. Led by experienced chefs and industry experts, you’ll take your skills to a world-class standard and build a strong foundation for success in the global food and beverage industry. </p>
            </div>
            <div className='about-us-img'>
            <img src={img2} className="about-us-img" alt="norefer"/>
            </div>
        </div>
        <div className='about-us-text2'>
            <p className="about-us-text2-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus tincidunt ipsum, eget sagittis dui consectetur at. In odio diam, vulputate vitae velit ut, dapibus tincidunt dui. Vestibulum scelerisque eget massa nec faucibus. Sed pellentesque venenatis tincidunt. Maecenas at mattis quam, ut bibendum odio. Nunc vitae tempor velit, in pharetra ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque molestie tortor nec erat vestibulum condimentum. Nam dui ante, tempus a sollicitudin id, vestibulum eget lectus. Maecenas malesuada quam sit amet mauris dapibus, in euismod nulla
            </p>
        </div>
        <div className='about-us-container3'>
            Campus Facilities
        </div>
        <hr className='rule'></hr>
        <div className='about-us-container4'>
            <div className='about-us-textcontainer'>
                <h3 className='about-us-head'>State-of-the-Art Kitchen Facilities</h3>
                <div className='about-us-text4'> malesuada. In sapien mauris, gravida vitae varius molestie, varius vel nisl. Curabitur efficitur risus ut mi gravida, ut tincidunt metus dapibus. Curabitur dapibus sapien turpis, ac eleifend
                </div>
            </div>
            <div className='about-us-img4'>
            <img src={img3} className="about-us-img4" alt="norefer"/>
            </div>
        </div>
        <div className='about-us-container4'>
            <div className='about-us-img4'>
            <img src={img4} className="about-us-img4" alt="norefer"/>
            </div>
            <div className='about-us-textcontainer'>
                <h3 className='about-us-head'>State-of-the-Art Kitchen Facilities</h3>
                <div className='about-us-text4'> malesuada. In sapien mauris, gravida vitae varius molestie, varius vel nisl. Curabitur efficitur risus ut mi gravida, ut tincidunt metus dapibus. Curabitur dapibus sapien turpis, ac eleifend
                </div>
            </div>
        </div>
        <div className='about-us-container4'>
            <div className='about-us-textcontainer'>
                <h3 className='about-us-head'>State-of-the-Art Kitchen Facilities</h3>
                <div className='about-us-text4'> malesuada. In sapien mauris, gravida vitae varius molestie, varius vel nisl. Curabitur efficitur risus ut mi gravida, ut tincidunt metus dapibus. Curabitur dapibus sapien turpis, ac eleifend
                </div>
            </div>
            <div className='about-us-img4'>
            <img src={img5} className="about-us-img4" alt="norefer"/>
            </div>
        </div>
        <div className='about-us-container3'>
            Testimonials
        </div>
        <hr className='rule'></hr>
        <div className='margin'></div>
        <h3 className='about-us-head2'>Student Testimonials</h3>
        <h3 className='about-us-head2'>Industry Professional Reviews</h3>
    </div>
    );
}

export default About;
