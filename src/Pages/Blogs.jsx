import React from 'react';
import Layout from "../components/layouts/Layout";
import "./styles/Blogs.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Blogs = () => {
  AOS.init();
  const defaultItems = [
    { id: 1, img: `./asserts/entrence.jpg`, text: 'Entrance', description: 'A beautifully decorated entrance welcoming guests.' },
    { id: 4, img: `./asserts/BLOG-2.jpg`, text: 'STAGE 1', description: 'Main stage for performances and key events.' },
    { id: 5, img: `./asserts/stage-2.jpg`, text: 'STAGE 2', description: 'A secondary stage set up for additional activities and speeches.' },
    { id: 6, img: `./asserts/stage-4.jpg`, text: 'STAGE 3', description: 'Another stage for hosting interactive sessions and fun activities.' },
    { id: 10, img: `./asserts/stayroom-1.jpg`, text: 'STAYING ROOM', description: 'A cozy and well-furnished staying room for visitors.' },
    { id: 8, img: `./asserts/CHAIRS.jpg`, text: 'CHAIRS', description: 'Comfortable seating arrangements for guests.' },
    { id: 12, img: `./asserts/sofa.jpg`, text: 'SOFA', description: 'Elegant and stylish sofa sets for guests to relax and unwind.' },
    { id: 11, img: `./asserts/stayroom-2.jpg`, text: 'STAYING ROOM', description: 'Another comfortable staying area with essential amenities.' },
    { id: 7, img: `./asserts/stage-3(children).jpg`, text: 'STAGE FOR CHILDREN', description: 'A dedicated stage for children’s performances and activities.' },
    { id: 9, img: `./asserts/stalls.jpg`, text: 'FOOD STALLS', description: 'Delicious food stalls offering a variety of snacks and meals.' },
    { id: 3, img: `./asserts/BLOG-1.jpg`, text: 'WISHES FROM US', description: 'Heartfelt wishes and messages from our team.' },
    { id: 2, img: `./asserts/decoration tree.jpg`, text: 'DECORATIONS', description: 'Well-lit and vibrant decorations enhancing the ambiance.' },
  ];

  return (
    <div style={{ marginTop: "80px" }}>
      <Layout title={"Gallery - ND Gardens"}>
        <div className="blogs-container">
          <h1 className="blogs-title"
            data-aos="fade-up" 
            data-aos-anchor-placement="bottom-bottom" 
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >OUR GALLERY</h1>
          <div className="grid-container">
            {defaultItems.map((item) => (
              <div key={item.id} className="grid-item" 
                data-aos="fade-up" 
                data-aos-anchor-placement="top-bottom" 
                data-aos-offset="100"
                data-aos-delay="25"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="img-container">
                  <img src={item.img} alt={item.text} />
                </div>
                <p className="item-title">{item.text}</p>
                <p className="item-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
    
  );
};

export default Blogs;