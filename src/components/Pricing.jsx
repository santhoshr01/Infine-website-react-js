import React from "react";
import "./Pricing.css";
import { FaCheck } from "react-icons/fa";
import { FaRegCalendarAlt, FaRegCreditCard, FaRegClock } from "react-icons/fa";

const Pricing = () => {
  const featuresLeft = [
    "Initial Consultation",
    "Online Resources",
    "Tracking Sheets",
  ];

  const featuresRight = [
    "Email Support",
    "Flexible Scheduling",
    "Private Client Portal",
  ];

  const packages = [
    {
      name: "Basic Package",
      price: "$199",
      gradient: "white",
      highlight: false,
    },
    {
      name: "Standard Package",
      price: "$299",
      gradient: "linear-gradient(to right, #008c6a, #6fe2a7)",
      highlight: true,
    },
    {
      name: "Premium Package",
      price: "$399",
      gradient: "white",
      highlight: false,
    },
  ];

  return (
    <section className="pricing-section">
      {/* Left Section */}
      <div className="pricing-left">
        <p className="pricing-subtitle">// PRICING</p>
        <h1 className="pricing-title">
          Coaching <span>packages that fit</span>
        </h1>
        <p className="pricing-text">
          Our coaching packages are designed to meet diverse needs and budgets,
          providing flexibility for every individual and organization. Whether
          you're seeking personal.
        </p>
        <button className="contact-btn">
          Get All Touch <span>↗</span>
        </button>
      </div>

      {/* Right Section */}
      <div className="pricing-right">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`pricing-card ${pkg.highlight ? "highlight" : ""}`}
            style={{
              background: pkg.gradient,
              color: pkg.highlight ? "white" : "#111",
            }}
          >
            <h3>{pkg.name}</h3>
            <h2>
              {pkg.price}
              <span>/month</span>
            </h2>
            <button
              className={`purchase-btn ${pkg.highlight ? "highlight-btn" : ""}`}
            >
              Purchase Now ↗
            </button>

            <div className="features-columns">
              <ul>
                {featuresLeft.map((item, i) => (
                  <li key={i}>
                    <FaCheck /> {item}
                  </li>
                ))}
              </ul>
              <ul>
                {featuresRight.map((item, i) => (
                  <li key={i}>
                    <FaCheck /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Bottom Icons Section */}
        <div className="bottom-info">
          <div>
            <FaRegCalendarAlt className="bottom-icon" />
            <p>
              <strong>Get 30 day free trial</strong>
            </p>
          </div>
          <div>
            <FaRegCreditCard className="bottom-icon" />
            <p>
              <strong>No any hidden fees pay</strong>
            </p>
          </div>
          <div>
            <FaRegClock className="bottom-icon" />
            <p>
              <strong>You can cancel anytime</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
