import React from "react";
import "./Card.css";

const Card = ({ title, image, price, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
        <div className="card-footer">
          <span className="card-price">${price}</span>
          <button className="card-btn">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
