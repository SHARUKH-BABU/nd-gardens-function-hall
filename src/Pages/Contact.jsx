import React from "react";
import "./styles/Contact.css";
import Layout from "../components/layouts/Layout";

const Contact = () => {
  return (
    <Layout>
    <div className="contact-main-container" style={{marginTop: "80px"}}>
      <div className="contact-container">
        {/* Left Side - Function Hall Details */}
        <div className="contact-info">
          <h1 className="contact-title">Nirmala Devi Gardens</h1>
          <p className="contact-description">
            A premium function hall with **<b>spacious rooms, well-maintained
            facilities, elegant stages, and comfortable seating</b>**.  
            Always available staff ensures a seamless experience.
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form">
          <h2 className="form-title">Contact Us</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone" required />
            <textarea placeholder="Your Comments" rows="4" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
    </Layout>
    
  );
};

export default Contact;
