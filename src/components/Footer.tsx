// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import careerslogo from '../assets/careerslogo.png';
import blogslogo from '../assets/blogslogo.png';
import aboutuslogo from '../assets/aboutlogo.png';
import traininglogo from '../assets/traininglogo.png';
import contactuslogo from '../assets/contactuslogo.png';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";

const Footer = () => {

 
  return (

    <footer className="footer">
      <div id="l3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="careers.html" className="footer-link">
      <img src={careerslogo} alt="C" className="link-icon"/>
      Careers
    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="blogs.html">
        <img src={blogslogo} alt="Blogs" className="link-icon" />
        Blogs
      </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="aboutus.html">
        <img src={aboutuslogo} alt="About Us" className="link-icon" />
        About Us
      </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="training.html">
        <img src={traininglogo} alt="Training" className="link-icon" />
        Training
      </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="contactus.html">
        <img src={contactuslogo} alt="Contact Us" className="link-icon" />
        Contact Us
      </a>
    </div>
      {/* <div className="footer-container">
        <p> MyCompany. All Rights Reserved.</p>
      </div> */}
      <div id="q1">
     < div id='a19'>
                  <h2 style={{color:'aliceblue',textAlign:'left'}}>Copyright @Sevakdigitech&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FaFacebookF color='white' size={25}/>&nbsp;&nbsp;<FaInstagramSquare size={25} />&nbsp;&nbsp;
                    <FaLinkedinIn  size={25}/>&nbsp;&nbsp;<SiYoutubeshorts size={25} />
                  </h2>
                  
                </div></div>
    </footer>
  );
};

export default Footer;

