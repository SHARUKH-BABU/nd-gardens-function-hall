import React, { useState } from 'react';
import Layout from "../components/layouts/Layout";
import "./styles/Booking.css";
import { ToastContainer, toast } from 'react-toastify';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Booking = () => {

  Aos.init();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Booking Success ', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <Layout title={"Book Your Spot - ND Gardens"}>
      <div className="booking-container">
        <h1 className="booking-title"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="100"
          data-aos-duration="500"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
        >Book Your Spot</h1>
        <form className="booking-form" onSubmit={handleSubmit}
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="200"
          data-aos-duration="700"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
        >
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} required />
          <button type="submit">Confirm Booking</button>
        </form>
        <ToastContainer />
      </div>
    </Layout>
  );
};

export default Booking;