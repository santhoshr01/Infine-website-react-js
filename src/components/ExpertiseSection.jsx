import React from "react";
import "./ExpertiseSection.css";
import coach1 from "../assets/coach1.jpg"
import coach2 from "../assets/coach2.jpg"
import coach3 from "../assets/coach3.jpg"
import coach4 from "../assets/coach4.jpg"
import coach5 from "../assets/coach5.jpg"
import coach6 from "../assets/coach6.jpg"
import coach7 from "../assets/coach7.jpg"
import coach8 from "../assets/coach8.jpg"


const ExpertiseSection = () => {
  return (
    <section className="expertise-section">
      <div className="expertise-left">
        <p className="tag">// OUR EXPERTISE</p>
        <h2>
          Certified and experienced <br />
          <span>coaching professionals</span>
        </h2>
        <p className="desc">
          Choosing us means partnering with experienced coaches who are dedicated to
          unlocking your potential. We offer personalized strategies, proven methods.
        </p>
        <button className="contact-btn">Contact Now →</button>
      </div>

      <div className="expertise-right">
        <div className="coaching-box">
          <img src={coach1} alt="Communication Coaching" />
          <span>Communication Coaching</span>
        </div>
        <div className="coaching-box">
          <img src={coach2} alt="Personal Coaching" />
          <span>Personal Coaching</span>
        </div>
        <div className="coaching-box">
          <img src={coach3} alt="Strategy" />
          <span>Strategy</span>
        </div>
        <div className="coaching-box">
          <img src={coach4} alt="Productivity & Efficiency Coaching" />
          <span>Productivity & Efficiency Coaching</span>
        </div>
        <div className="coaching-box">
          <img src={coach5} alt="Health Coach" />
          <span>Health Coach</span>
        </div>
        <div className="coaching-box">
          <img src={coach6} alt="Leadership" />
          <span>Leadership</span>
        </div>
        <div className="coaching-box">
          <img src={coach7} alt="Marketing Coaching" />
          <span>Marketing Coaching</span>
        </div>
        <div className="coaching-box">
          <img src={coach8} alt="Career Transition Coaching" />
          <span>Career Transition Coaching</span>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
