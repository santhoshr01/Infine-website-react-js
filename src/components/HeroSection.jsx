import React from "react";
import "./HeroSection.css";
import heroImg from "../assets/hero.jpg"
import "./herofeatures.css";
import { FaChartLine, FaBinoculars, FaBookOpen, FaUsers, FaUserTie } from "react-icons/fa";
import HeroFeatures from "./HeroFeatures";



const HeroSection = () => {
  return (
    <section className="hero"
    style={{
    backgroundImage: `url(${heroImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="welcome">WELCOME TO INFINE.</p>
          <h1>
            Expert your life & <br />
            <span>business coaching</span>
          </h1>
          <div className="hero-buttons">
            <button className="btn-primary">Get In Touch →</button>
            <button className="btn-secondary">Explore More →</button>
          </div>
        </div>
      </div>
       <HeroFeatures/>
    </section>
  );
};

export default HeroSection;   

