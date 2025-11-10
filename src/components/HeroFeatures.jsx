import React from "react";
import "./herofeatures.css";
import { FaChartLine, FaBinoculars, FaBookOpen, FaUsers, FaUserTie } from "react-icons/fa";
import HeroSection from "./HeroSection";

const HeroFeatures = () => {
  return (
    <section className="hero-features">
        
      <div className="feature">
        <FaChartLine className="feature-icon" />
        <p>Tailored Coaching Solutions<br />for growth.</p>
      </div>
      <div className="feature">
        <FaBinoculars className="feature-icon" />
        <p>Proven Coaching<br />Techniques Backed.</p>
      </div>
      <div className="feature">
        <FaBookOpen className="feature-icon" />
        <p>Holistic Life and Business<br />Coaching.</p>
      </div>
      <div className="feature">
        <FaUsers className="feature-icon" />
        <p>Flexible Client Centered<br />Coaching Program.</p>
      </div>
      <div className="feature">
        <FaUserTie className="feature-icon" />
        <p>Expert Guidance with<br />Ongoing Support.</p>
      </div>
      
    
    </section>
  );
};

export default HeroFeatures;
