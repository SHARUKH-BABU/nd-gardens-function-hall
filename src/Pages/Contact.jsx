import React from "react";
import "./styles/Contact.css";
import Layout from "../components/layouts/Layout";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  Aos.init();

  return (
    <Layout title={"Contact Us - ND Gardens"} description={"Contact us for booking, queries, and feedback."} keywords={"Contact ND Gardens, ND Gardens Contact, ND Gardens Booking, ND Gardens Queries, ND Gardens Feedback"} author={"Nirmala Devi Functional Halls"}>
    <div className="contact-main-container" style={{marginTop: "80px"}}>
      <div className="contact-container"
      >
        {/* Left Side - Function Hall Details */}
        <div className="contact-info"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <h1 className="contact-title">N.D Gardens</h1>
          <p className="contact-description">
            A premium function hall with **<b>spacious rooms, well-maintained
            facilities, elegant stages, and comfortable seating</b>**.  
            Always available staff ensures a seamless experience.
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
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
