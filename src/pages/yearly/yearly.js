import React from "react";
import "./yearly.css";
import logo from "./logo.png";
const Yearly = () => {
  return (
    <div>
      <div className="yearly-head">
        <h1 className="yearly-head-text">Yearly Courses</h1>
        <hr className="yearly-head-hr" />
        </div>
        <div className="yearly-body-container">
            <div className="yearly-img">
                <img src={logo} alt="img" className="yearly-img-img" />
            </div>
            <div className="yearly-body-subcontainer">
                <h1 className="yearly-body-subcontainer-head">UK CERTIFIED ADVANCE CULINARY DIPLOMA</h1>
                <div className="yearly-body-subcontainer-head2">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                </div>
                <button className="yearly-body-subcontainer-btn">Book Now</button>
            </div>
        </div>
    </div>
  );
}

export default Yearly;