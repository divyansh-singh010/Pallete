import React from "react";
import "./home.css";

import homebg from "./home_bg.svg";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import logo from "./logo.png";

const Home = ({ home }) => {
  return (<div>
    <div className="home">
      <img className="home-bg" src={homebg} alt="profile" />
      <div className="home-bg-text">
        <p className="home-text">
          palate
          <br />
          culinary
          <br />
          academy
        </p>
      </div>
      <div className="home">
        <div className="home-images">
          <div className="img-item">
            <img className="home-img mid-img" src={img1} alt="profile" />
          </div>
          <div className="img-item">
            <img className="home-img mid-img" src={img2} alt="profile" />
          </div>
          <div className="img-item">
            <img className="home-img last-img" src={img3} alt="profile" />
          </div>
        </div>
        <div className="container4">
          <div className="image1">
            <img className="home-text-img" src={logo} alt="profile" />
          </div>
          <div className="welcome-text">
            <p className="home-welcome-text">
              WELCOME To palate Culinary Academy
            </p>
            <p className="home-welcome-text2">
              Palate Culinary Academy is an International culinary and pastry
              arts education, driven by the vision of Celebrity chef Rakhee
              Vaswani, Our outstanding courses are tailored for your goals,
              offering hands-on training for Bachelor students, professionals,
              career-changers, and entrepreneurs. Led by experienced chefs and
              industry experts, you’ll take your skills to a world-class standard
              driven by the vision of Celebrity chef Rakhee Vaswani,
            </p>
          </div>
        </div>
       <div className="rakhee-vaswani">
        <div className="rakhee-vaswani-child" />
        <div className="rakhee-vaswani-item" />
        <div className="head-chef-and">head Chef and Founder</div>
        <b className="rakhee-vaswani1"> Rakhee vaswani</b>
        <div className="rakhee-vaswani-inner" />
        <div className="sed-pellentesque-venenatis">{`Sed pellentesque venenatis tincidunt. Maecenas at mattis quam, ut bibendum odio. Nunc vitae tempor velit, in pharetra ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque molestie tortor nec erat vestibulum condimentum. Nam dui ante, tempus a sollicitudin id, vestibulum eget lectus. Maecenas malesuada quam sit amet mauris dapibus `}</div>
      </div>
    </div>
          <div className="img-container">
            <img src={logo} alt="rakhee" className="rakhee-img" />
          </div>
        </div>
        <div className="container3">
          <h3 className="courses">Courses We Offer</h3>
          <hr className="rule" />
          <p className="courses-text">
            We offer not only UK Certified Culinary, Patisserie & Bakery courses,
            but also over 150 one day workshops, many other international
            professional programs, Chef-special pop-ups, fancy brunches,
            International Placements and More
          </p>
        </div>
        <div className="container4">
          <div className="sub">
            <h4 className="sub-text">LEVEL 2 CERTIFICATE IN CULINARY SKILLS</h4>
            <h3 className="sub-text2">Rs 420,000</h3>
            <button className="sub-btn">GET IT NOW</button>
          </div>
          <div className="sub">
            <h4 className="sub-text">LEVEL 2 CERTIFICATE IN CULINARY SKILLS</h4>
            <h3 className="sub-text2">Rs 420,000</h3>
            <button className="sub-btn">GET IT NOW</button>
          </div>
        </div>
        <div className="container5">
          <h2 className="take-away">Take Away Benefits</h2>
        </div>
        <div className="container6">
          <div className="sub-6"></div>
          <div className="sub-6"></div>
          <div className="sub-6"></div>
          <div className="sub-6"></div>
          <div className="sub-6"></div>
          <div className="sub-6"></div>
        </div>
      </div>
  );
};

export default Home;
