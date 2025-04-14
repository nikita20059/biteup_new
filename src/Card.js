import React from "react";
import { motion } from 'framer-motion';
import Wave from 'react-wavify';
import { FaApple, FaGooglePlay, FaFacebookF, FaGoogle, FaGithub, FaTwitter } from 'react-icons/fa';
import { PiLightningFill } from 'react-icons/pi';
import { FaPaperPlane } from 'react-icons/fa';

import "./Card.css";

const Card = () => {
  return (
    <>
    <section className="about-section">
      <div className="about-content animate-fade">
        <h1>Contact Us</h1>
        <p className="breadcrumb">
          <span className="breadcrumb-home">Home</span>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-current">Contact Us</span>
        </p>
      </div>
      <div className="veggies-banner animate-slide"></div>
    </section>
    <div style={{ background: 'linear-gradient(to right, rgba(255,0,0,0), #f322a0)', position: 'relative', overflow: 'hidden' }}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="3 30 1000 70"
    style={{ display: 'block', width: '100%', height: 'auto', transform: 'rotate(180deg)' }}
  >
    <path
      d="M0 0v60c9 0 18-3 25-10 13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s37 13 50 0c14-14 37-14 50 0 7 7 16 10 25 10V0H0Z"
      fill="white"
    ></path>
  </svg>
</div>
<section className="contact-info-section">
      <div className="contact-info-container">
        {/* Hotline */}
        <div className="info-card">
          <img src="c1.png" alt="Hotline" className="info-icon" />
          <h3>Hotline</h3>
          <p>+4733378901</p>
        </div>

        {/* Location */}
        <div className="info-card">
          <img src="c2.png" alt="Location" className="info-icon" />
          <h3>Our Location</h3>
          <p>
            55 Main Street, The Grand Avenue 2nd<br />
            Block, New York City
          </p>
        </div>

        {/* Email */}
        <div className="info-card">
          <img src="c3.png" alt="Email" className="info-icon" />
          <h3>Official Email</h3>
          <p>info@restan.com</p>
        </div>
      </div>
    </section>
    
    <section className="contact-section">
      <div className="form-container">
        <div className="form-title">
          <p className="subtitle">KEEP IN TOUCH</p>
          <h2 className="main-title">Send us a Message</h2>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <div className="form-row">
            <input type="email" placeholder="Email*" required />
            <input type="tel" placeholder="Phone" />
          </div>
          <textarea rows="6" placeholder="Your Message *" required></textarea>
          <button type="submit" className="submit-btn">
            <FaPaperPlane className="btn-icon" /> Get In Touch
          </button>
        </form>
      </div>
    </section>

      {/* <div className="map-container">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3724.659049384312!2d75.55594599999999!3d21.0063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1744448584268!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div> */}

<section className="map-wrapper">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3724.659049384312!2d75.55594599999999!3d21.0063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1744448584268!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </section>


    <Wave mask="url(#mask)" fill="rgb(243, 34, 160)"  style={{ marginTop: '-49px' }}>
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0" stopColor="white" />
              <stop offset="0.5" stopColor="black" />
            </linearGradient>
            <mask id="mask">
              <rect x="0" y="0" width="2000" height="100" fill="url(#gradient)" />
            </mask>
          </defs>
        </Wave>
        

    <div className="footer-container">
      {/* Hero Section */}
      <motion.div 
        className="footer-hero"
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <div className="footer-hero-content">
          <h1>Boost your business growth with Floti - your ultimate productivity tool</h1>
          <motion.button 
            className="footer-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try 14 Days Free Trial
          </motion.button>
        </div>
      </motion.div>

      {/* Footer Main */}
      <div className="footer-main">
        {/* Floti Info */}
        <div className="footer-column">
          <div className="footer-logo">
            <PiLightningFill size={28} />
            <h2>Floti</h2>
          </div>
          <p>
            This may include the company’s address, phone number, email address, and links to social media profiles. Links to important pages within the website, such as the homepage.
          </p>
        </div>

        {/* Product Links */}
        <div className="footer-column">
          <h3>PRODUCT</h3>
          <ul>
            <li>Services</li>
            <li>About Us</li>
            <li>News & Stories</li>
            <li>Roadmap</li>
          </ul>
        </div>

        {/* Important Links */}
        <div className="footer-column">
          <h3>IMPORTANT LINKS</h3>
          <ul>
            <li>Our Journeys</li>
            <li>Roadmap</li>
            <li>Pricing Plans</li>
          </ul>
        </div>

        {/* Downloads */}
        <div className="footer-column">
          <h3>DOWNLOADS</h3>
          <button className="store-button"><FaApple /> App Store</button>
          <button className="store-button"><FaGooglePlay /> Google Play</button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>2025© Floti - Zoyothemes.com Terms Conditions & Policy.</p>
        <div className="footer-icons">
          <FaFacebookF />
          <FaGoogle />
          <FaTwitter />
          <FaGithub />
          <PiLightningFill />
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Card;
