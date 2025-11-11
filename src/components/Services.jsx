import React from "react";
import "./Services.css";
import { FaUserCircle, FaBriefcase, FaGem, FaUsers } from "react-icons/fa";

const Services = () => {
    return (
        <section className="services-section">
            <div class="service-center">
                <div className="services-left">
                    <p className="tag">// SERVICES</p>
                    <h1>
                        Comprehensive coaching for life and <span>business</span>
                    </h1>
                    <p className="description">
                        Our coaching services provide personalized strategies for both personal
                        growth and business success. We focus on your unique challenges, offering
                        expert guidance to help you.
                    </p>
                    <button className="btn-view">View All Services →</button>
                </div>
            </div>

            <div className="services-right">
                <div className="service-card">
                    <FaUserCircle className="icon" />
                    <h3>Personal Coaching</h3>
                    <p>One-on-one sessions to achieve personal goals and enhance self-awareness.</p>
                </div>

                <div className="service-card">
                    <FaBriefcase className="icon" />
                    <h3>Business Coaching</h3>
                    <p>One-on-one sessions to achieve business goals and improve leadership.</p>
                </div>

                <div className="service-card">
                    <FaGem className="icon" />
                    <h3>Career Development</h3>
                    <p>Guidance on career transitions, job search strategies, and skill enhancement.</p>
                </div>

                <div className="service-card">
                    <FaUsers className="icon" />
                    <h3>Team Coaching</h3>
                    <p>Enhancing teamwork, collaboration, and communication within organizations.</p>
                </div>

                <div className="service-card">
                    <FaUsers className="icon" />
                    <h3>relationship coaching</h3>
                    <p>Guidance on career transitions, job search strategies, and skill enhancement.</p>
                </div>

                <div className="service-card">
                    <FaUsers className="icon" />
                    <h3>spiritual coaching</h3>
                    <p>Enhancing teamwork, collaboration, and communication within organizations.</p>
                </div>
            </div>

            {/* Bottom section */}
            <div className="bottom-line"></div>

            <div className="quote-section">
                <span className="free-badge">Free</span>
                <p>
                    Let's make something great work together.{" "}
                    <a href="#" className="free-quote">Get Free Quote</a>
                </p>
            </div>


        </section>


    );
};

export default Services;
