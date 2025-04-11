import React from 'react';
import { motion } from 'framer-motion';

import './About.css';


function About() {
  return (
    <>
        <section className="about-section">
      <div className="about-content animate-fade">
        <h1>About Us</h1>
        <p className="breadcrumb">
          <span className="breadcrumb-home">Home</span>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-current">About Us</span>
        </p>
      </div>
      <div className="veggies-banner animate-slide"></div>
    </section>
    <section className="about-wrapper">
      <div className="about-container">
        <div className="about-images">
          <motion.img
            src="/a1.jpg"
            alt="Farmer"
            className="main-image"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />

          <motion.img
            src="/a2.png"
            alt="Vegetables"
            className="side-image"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />

          {/* <motion.div
            className="experience-box"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2>23+</h2>
            <p>Years Experience</p>
          </motion.div> */}
        </div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h4 className="tag">About Our Company</h4>
          <h2 className="heading">Eating Right Start With Organic Food</h2>
          <p className="description">
            Organic foods are produced through a farming system that avoids the
            use of synthetic pesticides, herbicides, genetically modified organisms
            (GMOs), and artificial fertilizers. Instead, organic farmers rely on
            natural methods like crop rotation, composting, and biological pest control.
          </p>

          <div className="features">
            <div className="feature-box">
              {/* <img src="/agriculture-icon.png" alt="Agriculture" /> */}
              <span>The Agriculture Leader</span>
            </div>
            <div className="feature-box">
              {/* <img src="/organic-icon.png" alt="Organic" /> */}
              <span>Smart Organic Solutions</span>
            </div>
          </div>

          <button className="discover-btn">DISCOVER MORE</button>
        </motion.div>
      </div>
    </section>

    
    </>
  );
}

export default About;
