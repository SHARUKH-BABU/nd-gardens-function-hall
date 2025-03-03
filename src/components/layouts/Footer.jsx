import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      {/* Logo & Tagline */}
      <div className="footer-brand">
        <img src="./asserts/ND_Gardens_Logo.png" alt="nd gardens logo" className="footer-logo" />
        <h2>Nirmala Devi Gardens Function Hall</h2>
        <p>Embrace Comfort, Discover Tradition at Nirmala Devi Gardens Function Hall.</p>
      </div>
  
      {/* Location Section */}
      <div className="footer-section">
        <h3>Location</h3>
        <p>Pedamiram, Bhimavaram, Andhra Pradesh 534204</p>
      </div>
  
      {/* Map Section */}
      <div className="footer-section">
        <h3>Map</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.6574606162403!2d81.48038987514607!3d16.54338188420691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a362d65504fee5f%3A0x4a65c427afab7fd1!2sNirmala%20Devi%20A%2FC%20Function%20Hall!5e0!3m2!1sen!2sin!4v1740951313128!5m2!1sen!2sin"
          width="100%"
          height="150"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
  
      {/* Contact Section */}
      <div className="footer-section">
        <h3>Get In Touch</h3>
        <p>Email: contact@sdpnivas.com</p>
        <p>Phone: +91 98765 43210</p>
      </div>
    </div>
  
    {/* Copyright Section */}
    <div className="footer-bottom">
      <p>© Nirmala Devi Gardens Function Hall. All rights reserved.</p>
    </div>
  </footer>
  
  )
}

export default Footer