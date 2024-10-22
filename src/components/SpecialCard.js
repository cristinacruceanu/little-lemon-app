import React from "react";
import "./SpecialCard.css";

const SpecialCard = ({ dishName, imageSrc, description, price }) => {
  return (
    <div className="special-card">
      <img src={imageSrc} alt={dishName} className="special-card-img" />
      <div className="special-card-content">
        <h3>{dishName}</h3>
        <p className="special-card-price">${price}</p>
        <p>{description}</p>
      </div>
      <button className="special-button">Order a delivery</button>
    </div>
  );
};
export default SpecialCard;
