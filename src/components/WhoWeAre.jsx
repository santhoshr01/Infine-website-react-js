import React from "react";
import "./WhoWeAre.css";
import whoWeAreImg from "../assets/who-we-are.jpg"; // 👈 Add your image here

function WhoWeAre() {
  return (
    <section className="who-section">
      <div className="who-container">
        {/* Left Side Text */}
        <div className="who-content">
          <p className="who-tag">// WHO WE ARE</p>
          <h2 className="who-title">
            Unlock your potential <br /> <span>with our expertise</span>
          </h2>
          <p className="who-desc">
            Choosing us means partnering with experienced coaches who are
            dedicated to unlocking your potential. We offer personalized
            strategies, proven methods, and unwavering support to help you
            navigate challenges.
          </p>

          <div className="who-stats">
            <div className="stat">
              <div className="circle">98%</div>
              <p>Satisfied Customers</p>
            </div>
            <div className="stat">
              <div className="circle">20K</div>
              <p>Projects Completed</p>
            </div>
          </div>

          <hr className="who-line" />

          <div className="who-extra">
            <h3>Certified And Experienced Coaching Professionals</h3>
            <p>
              Our team consists of highly trained and certified coaches who stay
              up-to-date with the latest coaching practices.
            </p>

            <ul className="who-list">
              <li>✓ Continuous Support And Accountability</li>
              <li>✓ Results-Driven Methods That Deliver Lasting Change</li>
            </ul>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="who-image">
          <img src={whoWeAreImg} alt="Team Coaching" />
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
