import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaUsers, FaStar, FaAward } from 'react-icons/fa';
import { FaPinterest, FaTwitter, FaTumblr, FaDribbble } from 'react-icons/fa';
import { FaShippingFast, FaHeadset, FaShieldAlt } from 'react-icons/fa';
import { FaApple, FaGooglePlay, FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import { PiLightningFill } from 'react-icons/pi';
import Wave from 'react-wavify';
import './About.css';


function About() {
  const steps = [
    {
      step: 'STEP - 01',
      title: 'Work Planning',
      description: 'Begin by conducting thorough soil tests to understand its composition, pH levels, and nutrient.',
      icon: '/bg1.png',
      img: '/a1.jpg',
    },
    {
      step: 'STEP - 02',
      title: 'Farm Growing',
      description: 'Begin by conducting thorough soil tests to understand its composition, pH levels, and nutrient.',
      icon: '/bg1.png',
      img: '/a1.jpg',
    },
    {
      step: 'STEP - 03',
      title: 'Crop Harvesting',
      description: 'Begin by conducting thorough soil tests to understand its composition, pH levels, and nutrient.',
      icon: '/b9.png',
      img: '/a1.jpg',
    },
    {
      step: 'STEP - 04',
      title: 'Food Processing',
      description: 'Begin by conducting thorough soil tests to understand its composition, pH levels, and nutrient.',
      icon: '/bg1.png',
      img: '/a1.jpg',
    },
  ];

  const stats = [
    {
      icon: <FaLeaf size={40} />, 
      value: '15663+', 
      label: 'Our Total Products'
    },
    {
      icon: <FaUsers size={40} />, 
      value: '356+', 
      label: 'Team Members'
    },
    {
      icon: <FaStar size={40} />, 
      value: '2365+', 
      label: 'Satisfied Customers'
    },
    {
      icon: <FaAward size={40} />, 
      value: '156+', 
      label: 'Awards Winning'
    },
  ];

  const teamMembers = [
    {
      name: 'Pawan Shimpi',
      title: 'Director',
      image: '/a1.jpg',
    },
    {
      name: 'Vaibhav Mali',
      title: 'Manager',
      image: '/a2.png',
    },
    {
      name: 'Himani Pande',
      title: 'Director',
      image: '/a1.jpg',
    },
  ];

  const features = [
    {
      icon: <FaShippingFast size={32} />, 
      title: 'Free Shipping',
      description: 'Free Home Delivery Offer'
    },
    {
      icon: <FaHeadset size={32} />,
      title: 'Online Support',
      description: '24/7 Online Support Provide'
    },
    {
      icon: <FaShieldAlt size={32} />,
      title: 'Secure Payment',
      description: 'Fully Secure Payment System'
    }
  ];

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

    <section className="how-we-work-section">
      <h2 className="how-we-work-title">How We Work It?</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="step-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="step-img-wrapper">
              <img src={step.img} alt={step.title} className="step-img" />
              <div className="step-icon">
                <img src={step.icon} alt="icon" />
              </div>
            </div>
            <p className="step-label">{step.step}</p>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <motion.div
            className="stat-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="icon">{stat.icon}</div>
            <div className="value">{stat.value}</div>
            <div className="label">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
 <div className="team-section">
      <motion.div
        className="team-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="team-subtitle">HAND WORK</p>
        <h2 className="team-title">OUR EXPERT TEAM</h2>
      </motion.div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="team-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={member.image} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
            <div className="social-icons">
              <FaPinterest />
              <FaTwitter />
              <FaTumblr />
              <FaDribbble />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    
    <div className="feature-container">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="feature-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="feature-icon">{feature.icon}</div>
          <div className="feature-text">
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        </motion.div>
      ))}
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
}

export default About;
