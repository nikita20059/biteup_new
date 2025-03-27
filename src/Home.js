// import React, { useState } from 'react'; // ✅ CORRECT
// import Wave from 'react-wavify'
// import { motion } from 'framer-motion';
// import {useEffect } from 'react';

// import { FaStar, FaShoppingCart } from 'react-icons/fa';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// // import { FaStar, FaShoppingCart } from 'react-icons/fa';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import './Home.css';

// export default function Home() {
//   const img1 = "/img3.png";
//   const items = [
//     {
//       title: 'Chicken Leg Piece',
//       image: '/food-1.png',
//       price: '$4,500',
//       desc: 'It’s the perfect dining experience where every dish is crafted with fresh high quality',
//     },
//     {
//       title: 'Egg and Cucumber',
//       image: '/food-2.png',
//       price: '$4,500',
//       desc: 'It’s the perfect dining experience where every dish is crafted with fresh high quality',
//     },
//     {
//       title: 'Chicken Fried Rice',
//       image: '/food-3.png',
//       price: '$4,500',
//       desc: 'It’s the perfect dining experience where every dish is crafted with fresh high quality',
//     },
//     {
//       title: 'Chicken Leg Piece',
//       image: '/food-1.png',
//       price: '$4,500',
//       desc: 'It’s the perfect dining experience where every dish is crafted with fresh high quality',
//     },
//   ];

//   const [activeTab, setActiveTab] = useState('Fast Food');

//   const tabs = ['Fast Food', 'Drinks & Juice', 'Chicken Pizza', 'Fresh Pasta'];

//   const item = [
//     { name: 'Chinese Pasta', price: '$15.99', image: '/food-1.png' },
//     { name: 'Chinese Pasta', price: '$15.99', image: '/food-2.png' },
//     { name: 'Special Burger', price: '$15.99', image: '/food-3.png' },
//     { name: 'Chicken Noodles', price: '$15.99', image: '/food-1.png' },
//     { name: 'Vegetables Burger', price: '$15.99', image: '/food-2.png' },
//   ];
//   const contents = [
//     {
//       tagline: "Good Food, Good Mood",
//       heading: "Premium Restaurants/Cafes",
//       description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
//     },
//     {
//       tagline: "Delicious & Fresh",
//       heading: "Top Chefs & Recipes",
//       description: "Experience the best culinary delights prepared by world-class chefs at our premium outlets."
//     },
//     {
//       tagline: "Eat. Love. Repeat.",
//       heading: "Exclusive Dining Experience",
//       description: "Enjoy an unforgettable dining journey with cozy ambiance and mouth-watering dishes."
//     }
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % contents.length);
//     }, 1000); // 1 second auto change
//     return () => clearInterval(interval);
//   }, []);

//   const current = contents[index];
//   return (
//     <>
//     <div>
        
//     <section className="hero">
//     <motion.div
//       className="hero-content"
//       key={index}
//       initial={{ opacity: 0, x: -50 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: 50 }}
//       transition={{ duration: 0.8 }}
//     >
//       <p className="tagline">{current.tagline}</p>
//       <h2>{current.heading}</h2>
//       <p className="description">{current.description}</p>
//       <button>Order Now →</button>
//     </motion.div>

   
//       <div className="hero-image">
//         <img src="/cap.png" alt="Delicious food" />
//       </div>
      
//     </section>

//     <section className="popular-section">
//       <h5 className="section-subtitle">🍽️ BEST FOOD 🍽️</h5>
//       <h2 className="section-title">Popular Food Items</h2>

//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={30}
//         slidesPerView={1}
//         breakpoints={{
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 1000 }}
//         loop
//       >
//         {items.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="food-card">
//               <div className="food-img">
//                 <img src={item.image} alt={item.title} />
//               </div>
//               <h4>{item.title}</h4>
//               <p>{item.desc}</p>
//               <div className="card-footer">
//                 <span className="price">{item.price}</span>
//                 <span className="stars">
//                   {[...Array(5)].map((_, i) => (
//                     <FaStar key={i} className="star" />
//                   ))}
//                 </span>
//                 <button className="cart-btn"><FaShoppingCart /></button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>

//     <section className="special-section">
//     <Wave mask="url(#mask)" fill="rgb(243, 34, 160)" >
//   <defs>
//     <linearGradient id="gradient" gradientTransform="rotate(90)">
//       <stop offset="0" stopColor="white" />
//       <stop offset="0.5" stopColor="black" />
//     </linearGradient>
//     <mask id="mask">
//       <rect x="0" y="0" width="2000" height="180" fill="url(#gradient)"  />
//     </mask>
//   </defs>
// </Wave>
//     <div className="marquee">
//     {/* <Wave mask="url(#mask)" fill="rgb(243, 34, 160)" >
//   <defs>
//     <linearGradient id="gradient" gradientTransform="rotate(90)">
//       <stop offset="0" stopColor="white" />
//       <stop offset="0.5" stopColor="black" />
//     </linearGradient>
//     <mask id="mask">
//       <rect x="0" y="0" width="2000" height="180" fill="url(#gradient)"  />
//     </mask>
//   </defs>
// </Wave> */}
    
//         <p>
//           PIZZA &nbsp; GRILLED CHICKEN &nbsp; CHICKEN NOODLES &nbsp; SPECIAL BURGER &nbsp; CHICKEN PIZZA &nbsp; GRILLED CHICKEN &nbsp;
//         </p>
//       </div>

//       <div className="menu-card">
        
//         <h5 className="menu-title">🍔 OUR SPECIAL MENU 🍔</h5>
//         <div className="tabs">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               className={activeTab === tab ? 'active' : ''}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         <div className="menu-items">
//           {item.map((item, index) => (
//             <div className="menu-item" key={index}>
//               <img src={item.image} alt={item.name} />
//               <div className="item-info">
//                 <h4>{item.name}</h4>
//                 <p>It’s a recommended item</p>
//               </div>
//               <span className="item-price">{item.price}</span>
//             </div>
//           ))}
          
//         </div>
//       </div>
//       <Wave mask="url(#mask)" fill="rgb(243, 34, 160)" >
//   <defs>
//     <linearGradient id="gradient" gradientTransform="rotate(90)">
//       <stop offset="0" stopColor="white" />
//       <stop offset="0.5" stopColor="black" />
//     </linearGradient>
//     <mask id="mask">
//       <rect x="0" y="0" width="2000" height="100" fill="url(#gradient)"  />
//     </mask>
//   </defs>
// </Wave>
//     </section>
    
//     <section className="download-section">
//       <div className="content">
//         <h2>Simple Way to Order Your Food Faster</h2>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
//           tempor incididunt ut labore et dolore magna aliqua. Quis suspendisse
//           ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
//           facilisis.
//         </p>
//         <div className="download-buttons">
//           <img src="/1.png" alt="Get it on Google Play" />
//           <img src="/1.png" alt="Download on the App Store" />
//         </div>
//       </div>

//       <div className="images">
//         <img className="app-screen app1" src="/1.png" alt="App screen 1" />
//         <img className="app-screen app2" src="/1.png" alt="App screen 2" />
//       </div>
//     </section>

//     </div>
//     </>
//   );
// }
import React, { useState, useEffect } from 'react';
import Wave from 'react-wavify';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { BiLogoInstagramAlt } from "react-icons/bi";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Home.css';

export default function Home() {
  // Popular items for swiper
  const [currentSlide, setCurrentSlide] = useState(0);

  const items = [
    {
      title: 'MR. Pavan Shimpi',
      image: '/food-1.png',
      price: 'CEO',
      desc: 'It’s the perfect dining experience where every dish is crafted with fresh high quality',
    },
    {
      title: 'Mr. Vaibhav Mali',
      image: '/food-2.png',
      price: 'Marketing Head',
      desc: 'It’s the perfect dining experience where every dish is crafted with fresh high quality',
    },
    {
      title: 'Ms. Sakshi Patil',
      image: '/food-3.png',
      price: 'Lead Developer',
      desc: 'It’s the perfect dining experience where every dish is crafted with fresh high quality',
    },
    {
      title: 'Ms. Himani Pande',
      image: '/food-1.png',
      price: 'UI/UX Designer',
      desc: 'It’s the perfect dining experience where every dish is crafted with fresh high quality',
    },
  ];

  // Tabs & Menu Items
  const [activeTab, setActiveTab] = useState('Fast Food');
  const tabs = ['Fast Food', 'Drinks & Juice', 'Chicken Pizza', 'Fresh Pasta'];
  const item = [
    { name: 'Chinese Pasta', price: '$15.99', image: '/food-1.png' },
    { name: 'Chinese Pasta', price: '$15.99', image: '/food-2.png' },
    { name: 'Special Burger', price: '$15.99', image: '/food-3.png' },
    { name: 'Chicken Noodles', price: '$15.99', image: '/food-1.png' },
    { name: 'Vegetables Burger', price: '$15.99', image: '/food-2.png' },
  ];

  // Hero Carousel slides
  const slides = [
    {
      id: 1,
      tagline: 'Welcome to FlavorTown!',
      heading: 'The Best Burgers in Town',
      description: 'Juicy, delicious burgers made fresh to order.',
      image: '/bg1.png',
    },
    {
      id: 2,
      tagline: 'Authentic Pizza Experience',
      heading: 'Wood-fired Pizzas',
      description: 'Crispy crust and cheesy toppings straight from Italy.',
      image: '/bg3.png',
    },
    {
      id: 3,
      tagline: 'Sweet Treats Await!',
      heading: 'Decadent Desserts',
      description: 'Satisfy your sweet tooth with our desserts.',
      image: '/bg4.png',
    },
  ];

  // Hero Carousel state
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = slides[index];

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const deals = [
  {
    id: 1,
    title: "Chicken Pizza",
    price: "$24.00",
    rating: 4,
    image: "/food-1.png"
  },
  {
    id: 2,
    title: "Egg And Cucumber",
    price: "$28.00",
    rating: 4,
    image: "/food-1.png"
  },
  {
    id: 3,
    title: "Chicken Fried Rice",
    price: "$20.00",
    rating: 4,
    image: "/food-1.png"
  },
  {
    id: 4,
    title: "Chicken Leg Piece",
    price: "$58.00",
    rating: 4,
    image: "/food-1.png"
  },
  {
    id: 5,
    title: "Chinese Pasta",
    price: "$70.00",
    rating: 4,
    image: "/food-1.png"
  },
];

  return (
    <div>
      
      
      <section className="hero">
      <div className="image-wrapper">
  {/* Background Image */}
  <motion.img
  src="/b9.png"
  alt="background"
  className="background-blur"
  initial={{ opacity: 10, scale: 0.8, rotate: 170 }}
  animate={{ 
    opacity: 0.5, 
    scale: [0.8, 1, 0.8], 
    rotate: [170, 180, 170], 
    y: [0, -10, 0] 
  }}
  transition={{ 
    duration: 8, 
    repeat: Infinity, 
    ease: "easeInOut" 
  }}
/>
<motion.img 
  src="/bg10.png" 
  alt="background" 
  className="tomato"
  animate={{ 
    x: [-50, 0, -50], 
    rotate: [0, 10, 0] 
  }}
  transition={{ 
    duration: 6, 
    ease: "easeInOut", 
    repeat: Infinity 
  }}
/>

  {/* <img 
    src="/bg12.png" // <-- your background image path
    alt="background" 
    className="cili" 
  /> */}

  {/* Foreground Motion Image */}
  {/* <motion.img
    src='/b9.png'
    alt="hero"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
    style={{
      width: '250px',
      height: '250px',
      position: 'relative',
      zIndex: 2
    }}
  /> */}
</div>

        <AnimatePresence mode="wait">
          <motion.div
            className="hero-content"
            key={current.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <p className="tagline">{current.tagline}</p>
            <h2>{current.heading}</h2>
            <p className="description">{current.description}</p>
            <button>Order Now →</button>

            {/* <div className="carousel-controls">
              <button onClick={prevSlide}>⟵</button>
              <button onClick={nextSlide}>⟶</button>
            </div> */}
            <div className="custom-carousel">
  <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
    {slides.map((slide, index) => (
      <div key={index} className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}>
        {/* <img src={slide.image} alt={`Slide ${index + 1}`} /> */}
        <div className="slide-content">
          <h3>{slide.heading}</h3>
          <p>{slide.description}</p>
        </div>
      </div>
    ))}
  </div>
  
  <div className="carousel-thumbnails">
    {slides.map((slide, index) => (
      <img
        key={index}
        src={slide.image}
        alt={`Thumbnail ${index + 1}`}
        className={index === currentSlide ? 'selected' : ''}
        onClick={() => setCurrentSlide(index)}
      />
    ))}
  </div>
</div>
          </motion.div>
        </AnimatePresence>

        <motion.div
  // className="hero-image decorated-advanced"
  // key={current.image}
  // initial={{ opacity: 0, y: 50 }}
  // animate={{ opacity: 1, y: 0 }}
  // exit={{ opacity: 0, y: -50 }}
  // transition={{ duration: 0.8, ease: "easeInOut" }}
>
  {/* Dashed border closely around image */}
  {/* <div className="dashed-border"></div> */}

  {/* Cloud badge */}

  <motion.img
   className="hero-contenttt"
  src={current.image}
  alt={current.heading}
  initial={{ scale: 0.9, rotate: 0 }}
  animate={{ scale: 1, rotate: 360 }}
  transition={{ duration: 15, ease: "linear", repeat: Infinity }}
  style={{
    border: '3px dashed rgb(255, 255, 255)',
    borderRadius: '50%',
    objectFit: 'cover' // to make sure the image covers the circle nicely
  }}
/>  

</motion.div>

        
        
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
<section className="food-popular-deals">
      <div className="food-section-header">
        <h4><i className="fa fa-utensils"></i> POPULAR DISHES</h4>
        <h2>Our Most Popular Deals</h2>
      </div>
      <div className="food-deals-grid">
        {deals.map((deal) => (
          <motion.div
            key={deal.id}
            className="food-deal-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="food-image-wrapper">
              <img src={deal.image} alt={deal.title} />
            </div>
            <h3>{deal.title}</h3>
            <div className="food-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <i key={i} className={`fa-star ${i < deal.rating ? 'fas' : 'far'}`}></i>
              ))}
            </div>
            <p>The Registration Fee</p>
            <h4>{deal.price}</h4>
            <button className="food-order-btn">
              ORDER NOW <i className="fas fa-shopping-basket"></i>
            </button>
          </motion.div>
        ))}
      </div>
    </section>
      {/* POPULAR ITEMS SECTION */}
      

      <div className="marquee">
          <p>
            FREE   &nbsp; FREE   &nbsp; FREE   &nbsp; FREE   &nbsp; FREE   &nbsp; FREE   &nbsp;  FREE   &nbsp; FREE &nbsp; FREE &nbsp; FREE &nbsp; FREE &nbsp; FREE &nbsp;  FREE &nbsp; FREE &nbsp; FREE &nbsp; FREE &nbsp; FREE &nbsp; FREE &nbsp;
          </p>
        </div>
      <section className="hero-container">
        
      <motion.div 
        className="hero-box"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        
        <div className="hero-left">
          <h5>WELCOME FRESHEAT</h5>
          <h1>TODAY SPECIAL FOOD</h1>
          <p>Limited Time Offer</p>
          <button className="hero-order-btn">
            ORDER NOW <span>&#8594;</span>
          </button>
        </div>

        {/* Coupon Style Card */}
        <div className="hero-coupon-card">
          <div className="coupon-content">
            <h3>🔥 GET 45% OFF 🔥</h3>
            <p>Use Code: <strong>FRESH45</strong></p>
          </div>
          <div className="coupon-cut"></div>
          <div className="coupon-cut right"></div>
        </div>
      </motion.div>
    </section>


  

    
      {/* SPECIAL MENU SECTION */}
      <section className="special-section">
        {/* <Wave mask="url(#mask)" fill="rgb(243, 34, 160)">
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0" stopColor="white" />
              <stop offset="0.5" stopColor="black" />
            </linearGradient>
            <mask id="mask">
              <rect x="0" y="0" width="2000" height="180" fill="url(#gradient)" />
            </mask>
          </defs>
        </Wave> */}


        <div className="marquee">
          <p>
            PIZZA &nbsp; GRILLED CHICKEN &nbsp; CHICKEN NOODLES &nbsp; SPECIAL BURGER &nbsp; CHICKEN PIZZA &nbsp; GRILLED CHICKEN &nbsp;
          </p>
        </div>

        <section className="popular-section">
        <h5 className="section-subtitle">🍽️ Team Member 🍽️</h5>
        <h2 className="section-title">Meet the Team</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          loop
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="food-card">
                <div className="food-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <div className="card-footer">
                  <span className="price">{item.price}</span>
                  <span className="stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="star" />
                    ))}
                  </span>
                  <button className="cart-btn"><BiLogoInstagramAlt />
                </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
  
        
      </section> 


      

      {/* DOWNLOAD SECTION */}

      <section className="download-section">
  {/* Animated Text Section */}
  <motion.div
    className="content"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <h2>Simple Way to Order Your Food Faster</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div className="download-buttons">
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <img src="/3.png" alt="Apple Store" /> Download Now
      </motion.button>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <img src="/2.png" alt="Play Store" /> Download Now
      </motion.button>
    </div>
  </motion.div>

  {/* Image Grid Section */}
  <div className="image-grid">
    {/* Image 1 */}
    <motion.div
      className="image"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
    >
      <motion.img
        src="/download1.png"
        alt="Phone App 1"
        animate={{ y: [2, -40, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
      />
    </motion.div>

    {/* Image 2 */}
    <motion.div
      className="image"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
    >
      <motion.img
        src="/download2.png"
        alt="Phone App 2"
        animate={{ y: [0, -30, 2] }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
      />
    </motion.div>
    
  </div>
  
</section>
<Wave mask="url(#mask)" fill="rgb(243, 34, 160)">
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0" stopColor="white" />
              <stop offset="0.5" stopColor="black" />
            </linearGradient>
            <mask id="mask">
              <rect x="0" y="0" width="2000" height="100" fill="url(#gradient)" />
            </mask>
          </defs>
        </Wave>0


    </div>
  );
}

