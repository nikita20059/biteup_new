import React from "react";
import { motion } from 'framer-motion';
import Wave from 'react-wavify';
import { FaApple, FaGooglePlay, FaFacebookF, FaGoogle, FaGithub, FaTwitter } from 'react-icons/fa';
import { PiLightningFill } from 'react-icons/pi';
import "./Card.css";

const Card = () => {
  return (
    <>
      <div className="consultation-wrapper">
        <motion.div
          className="consultation-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="form-title">
          Contact Us 
          </h2>
          <p className="form-description">
          Let’s schedule a no-obligation call to discuss your goals and how we can help. 
          Fill out our consultation form or send us a message, 
          and we’ll get back to you via call or email as soon as possible.
          </p>
          <form className="consultation-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone" required />
            <textarea placeholder="Message" rows="4" required />
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      <div className="contact-section">
      <div className="info-cards">
        <motion.div className="info-card" whileHover={{ scale: 1.05 }}>
          <h3>Office Location</h3>
          <p>Van Lannepstraat 35, 1123EW,<br />Rotterdam, Netherlands</p>
        </motion.div>
        <motion.div className="info-card" whileHover={{ scale: 1.05 }}>
          <h3>Email Support</h3>
          <p>Expect a response within 24 hours -<br />we're on top of it!</p>
        </motion.div>
        <motion.div className="info-card" whileHover={{ scale: 1.05 }}>
          <h3>Call Us</h3>
          <p>Reach out and let's explore<br />collaboration possibilities!</p>
        </motion.div>
      </div>

      {/* <div className="map-container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3724.659049384312!2d75.55594599999999!3d21.0063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1744448584268!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div> */}
      <div className="map-container">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3724.659049384312!2d75.55594599999999!3d21.0063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1744448584268!5m2!1sen!2sin"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>



    </div>
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
