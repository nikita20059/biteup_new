import React from "react";
import "./Special.css";

const Special = () => {
  return (
    <section className="special-section">
      <div className="special-content">
        <h2>Today's Special</h2>
        <p>Enjoy our chef's signature dishes made with fresh, local ingredients. Limited-time offer!</p>
        <button className="special-btn">Explore Menu</button>
      </div>
      <div className="special-image">
        <img src="./assets/special.jpg" alt="Special Dish" />
      </div>
    </section>
  );
};

export default Special;
