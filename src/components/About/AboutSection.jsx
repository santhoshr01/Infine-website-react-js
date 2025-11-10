import React from 'react';
import './AboutSection.css';
import { FaAward } from "react-icons/fa";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-left">
        <div className="about-badge">
          <div>
            <FaAward className="award-icon" />
          <h3>30+ years of experience</h3>
          </div>
        </div>

        <div className="about-main-img">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Team working" />
        </div>

        <div className="about-sub-img">
          <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Business woman" />
        </div>

        <div className="side-text">5200+ FIVE STAR REVIEWS</div>
      </div>

      <div className="about-right">
        <h5>// ABOUT US</h5>
        <h2>
          Expert guidance and <br />
          <span>personalized coaching.</span>
        </h2>

        <p>
          Receive tailored coaching that empowers you to navigate challenges and
          achieve your personal and professional goals. With expert guidance.
        </p>

        <ul>
          <li>✔ Goal Setting And Accountability</li>
          <li>✔ Mindset And Confidence Building</li>
        </ul>

        <div className="about-clients">
          <div className="client-images">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" alt="Client" />
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" alt="Client" />
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" alt="Client" />
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" alt="Client" />
          </div>
          <p>Join our <b>5000+ satisfied client</b></p>
        </div>

        <div className="about-extra">
          <div className="creative-result">
            <div className="icon">💡</div>
            <div>
              <h4>Creative Result</h4>
              <p>Award Winning</p>
            </div>
          </div>

          <button className="get-in-touch">Get In Touch →</button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;