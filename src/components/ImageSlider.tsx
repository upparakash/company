// src/components/ImageSlider.tsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <div className="image-slider-container">
      {/* Image Slider Section */}
      <div className="image-slider">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>
      </div>

      {/* About Us Section */}
      <div className="a6">
        <h1 id="a7">About Us</h1>
        <p id="a8">
          Sevak Digital Technologies is a software development firm specializing in mobile, web, and backend development. We deliver innovative and high-quality solutions tailored to meet the unique needs of each client.
          <br /><br />
          Sevak Digital Technologies is a reliable and skilled partner for businesses looking for high-quality software solutions. We at Sevak DigiTech, work with a motto of fulfilling our client's requirements to the best possible extent. Our key services include Web design and development with open source platforms.
          <br /><br />
          We offer Mobile Application development for small to large-scale enterprises. We started developing and designing Applications in 2023.
          <br /><br />
          All of our Apps are custom-designed by top designers and developers, who are all proficient in multiple design platforms. Every Application we create is completely unique and to the exact specifications of each individual client. We ensure nothing but the best products and services with utmost care. Our dynamic work environment helps us offer 24x7x365 support that our Clients require at a much affordable cost.
        </p>
      </div>
     <br></br>
      {/* Services Section */}
      <div id="all">
     
        <h1 id="a9">Our Services</h1>

        <div id="a10">
          <div id="a">  </div>
          <div id="a13"><h1>Mobile App Development</h1>  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p id="a14">Bringing Mobility to your reach. Apps that are Fast, Innovative, Affordable.</p>
      
        </div>
        <div id="a11">
        <div id="b"></div>
          <h1 id="a15">Web Design & Development</h1></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p id="a16">Attract & Engage Clients to your business with creative features.<br></br> Our websites drive your business & Online reputation.</p>
      
        </div>
        <div id="a12">
        <div id="c"></div>
          <h1 id="a17">AI Solution for Business</h1>  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p id="a18">We design and develop AI-powered mobileapplications, AI-specific solutions, and intelligent data.</p>
      </div>
      
   
  );
};

export default ImageSlider;
