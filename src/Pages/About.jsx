import React from "react";
import "./styles/About.css";
import Layout from "../components/layouts/Layout.jsx";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: "5rem" }}>
      <Layout>
        {/* About Content */}
        <div className="about-container">
          {/* Left Section - Image */}
          <div className="image-section">
            <img src="./asserts/decoration tree.jpg" alt="Grand Event Hall" className="about-img" />
          </div>

          {/* Right Section - Text Content */}
          <div className="text-section">
            <h2>About Us</h2>
            <p>
              <strong>Nirmala Devi Gardens</strong> is an **exquisite venue** designed for
              **weddings, corporate events, and grand celebrations.** With elegant interiors,
              modern amenities, and professional event services, we ensure a perfect experience.
            </p>

            <div className="features-grid">
              <div className="feature-card">
                <h3>🎉 Spacious & Elegant</h3>
                <p>Host large gatherings with a luxurious ambiance.</p>
              </div>
              <div className="feature-card">
                <h3>🍽️ Premium Catering</h3>
                <p>Delight your guests with gourmet cuisine.</p>
              </div>
              <div className="feature-card">
                <h3>📍 Prime Location</h3>
                <p>Conveniently accessible with ample parking.</p>
              </div>
              <div className="feature-card">
                <h3>🎶 Stunning Décor & Entertainment</h3>
                <p>Customizable decorations and event solutions.</p>
              </div>
            </div>

            {/* Centered Button */}
            <div className="button-container">
              <button className="contact-btn" onClick={() => navigate("/booking")}>
                Book Your Event
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
