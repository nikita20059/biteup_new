// // Frontend code 
// // Filename - App.js
// // Filename - App.js

// import { useState } from 'react'
// function App() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const handleOnSubmit = async (e) => {
//         e.preventDefault();
//         let result = await fetch(
//         'http://localhost:5000/register', {
//             method: "post",
//             body: JSON.stringify({ name, email }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         result = await result.json();
//         console.warn(result);
//         if (result) {
//             alert("Data saved succesfully");
//             setEmail("");
//             setName("");
//         }
//     }
//     return (
//         <>
//             <h1>This is React WebApp </h1>
//             <form action="">
//                 <input type="text" placeholder="name" 
//                 value={name} onChange={(e) => setName(e.target.value)} />
//                 <input type="email" placeholder="email" 
//                 value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <button type="submit" 
//                 onClick={handleOnSubmit}>submit</button>
//             </form>

//         </>
//     );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Home from "./Home"; 
import About from "./About";
import Card from "./Card";
import './App.css';



function App() {
  return (
    <>
    <Router>
     
    <header className="header">
  
      <nav className="navbar">
        <div className="logo">  <img src="/logo1.png" alt="Logo" />
        </div>
        <ul className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
          <li>Shop</li>
          <li>Pages</li>
          <li>Blog</li>
        <Link to="/card">Contact</Link>

        </ul>
        <button className="order-btn">Order Now</button>
      </nav>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 30 1000 30"><path d="M0 0v60c9 0 18-3 25-10 13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s37 13 50 0c14-14 37-14 50 0 7 7 16 10 25 10V0H0Z" fill="#F322A0"></path></svg> */}
      
    <div style={{ background: 'linear-gradient(to right, rgba(255,0,0,0), #f322a0)', position: 'relative', overflow: 'hidden' }}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="3 30 1000 70"
    style={{ display: 'block', width: '100%', height: 'auto' }}
  >
    <path
      d="M0 0v60c9 0 18-3 25-10 13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s37 13 50 0c14-14 37-14 50 0 7 7 16 10 25 10V0H0Z"
      fill="white"
    ></path>
  </svg>
</div>


</header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/card" element={<Card />} />

      </Routes>
    </Router>
    
    </>
  );
}

export default App;
