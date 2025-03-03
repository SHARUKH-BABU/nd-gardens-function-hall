import React, { useState } from 'react';
import Layout from "../components/layouts/Layout";
import "./styles/Booking.css";
import { ToastContainer, toast } from 'react-toastify';

const Booking = () => {
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
    <Layout>
      <div className="booking-container">
        <h1 className="booking-title">Book Your Spot</h1>
        <form className="booking-form" onSubmit={handleSubmit}>
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