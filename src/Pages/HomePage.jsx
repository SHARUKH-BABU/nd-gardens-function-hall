import React, { useEffect } from 'react';
import Layout from '../components/layouts/Layout';
import './styles/LandingPage.css';
import "./styles/HomePage.css";
import Stack from "../usages/Stack";
import { Link } from 'react-router-dom';

const HomePage = () => {
  useEffect(() => {
    let intro = document.querySelector('.intro');
    let logoSpan = document.querySelectorAll('.logo');
    
    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add('active');
        }, (idx + 1) * 400);
      });
      
      setTimeout(() => {
        logoSpan.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.remove('active');
            span.classList.add('fade');
          }, (idx + 1) * 50);
        });
      }, 2000);
      
      setTimeout(() => {
        if (intro) intro.style.top = '-100vh';
      }, 2300);
    });
  }, []);

  const imageDetails = [
    {id: 1, img: './asserts/stage-4.jpg', alt: 'Stage' },
    {id: 2, img: './asserts/stage-2.jpg', alt: 'Reception' },
    {id: 3, img: './asserts/BLOG-2.jpg', alt: 'Corporate Events' },
    {id: 4, img: './asserts/stage.jpg', alt: 'Birthday Parties' },
    {id: 15, img: './asserts/stage-3(children).jpg', alt: 'Cultural Functions' }
  ]

  return (
    <div>
      <div className="intro">
        <h1 className="logo-header">
          <span className="logo">ND</span>
          <span className="logo"> Gardens</span>
        </h1>
      </div>
      <Layout>


        <div className='landing-page-image' style={{backgroundImage:"url('./asserts/BLOG-2.jpg"}}>
          <h2>Welcome to Nirmala Devi Gardens Functional Hall</h2>
          <p>A place where dreams take center stage and memories are made forever</p>
        </div>


        <div className="outer-about-ndg-container">
          <div className="about-ndg">
            <h1>Nirmala Devi Gardens Functional Hall</h1>
            <b>Creating unforgettable experiences, one event at a time</b>
            <p>Nirmala Devi Gardens is a premier functional hall designed to host grand celebrations, weddings, receptions, corporate events, and social gatherings with elegance and style. Nestled in a serene and spacious setting, our venue offers a blend of tradition and modern luxury, ensuring a memorable experience for you and your guests.</p>
            <p>With a beautifully landscaped ambiance, spacious banquet hall, and top-tier amenities, Nirmala Devi Gardens provides the perfect backdrop for your special moments. Whether it’s a traditional ceremony or a corporate event, our venue caters to every occasion with seamless service and sophistication.</p>
          </div>
        </div>
        


        <div className="outer-why-ndg-container">
          <div className="why-ndg">
            <h1>Why Choose Nirmala Devi Gardens?</h1>
            <div className="blocks-container">
              <div className="block">
                <h3 className="block-title">Spacious & Elegant Venue</h3>
                <p>Our functional hall is designed to accommodate large gatherings and events, ensuring ample space for your guests to move around comfortably.</p>
              </div>
              <div className="block">
                <h3 className="block-title">Modern Amenities</h3>
                <p>From state-of-the-art sound systems to well-equipped facilities, we provide all the amenities needed to make your event a success.</p>
              </div>
              <div className="block">
                <h3 className="block-title">Serene Location </h3>
                <p>Located in a peaceful and picturesque setting, our venue offers a tranquil ambiance that adds charm and elegance to your celebrations.</p>
              </div>
              <div className="block">
                <h3 className="block-title">Professional Service</h3>
                <p>Our dedicated team of professionals is committed to delivering exceptional service and ensuring that every detail of your event is taken care of.</p>
              </div>
              <div className="block">
                <h3 className="block-title">Customized Packages</h3>
                <p>We offer customized event packages that cater to your specific requirements, ensuring that your event is tailored to perfection.</p>
              </div>
            </div>
          </div>
        </div>


        <div className="event-types">
          <div className="event-description">
            <h1>Events We Host</h1>
            <p>At Nirmala Devi Gardens, we specialize in hosting a wide range of events, including:</p>
            <ul className="event-list">
              <li className='event-name'>Corporate Events</li>
              <li className='event-name'>Birthday Parties</li>
              <li className='event-name'>Social Gatherings</li>
              <li className='event-name'>Cultural Functions</li>
              <li className='event-name'>Weddings & Receptions</li>
            </ul>
            <Link to='/gallery'>
              <button id="explore-more-btn">
                Explore More
              </button>
            </Link>
          </div>
          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={true}
            cardDimensions={{ width: 300, height: 300 }}
            cardsData={imageDetails}
          />
        </div>



      </Layout>
    </div>
  );
};

export default HomePage;
