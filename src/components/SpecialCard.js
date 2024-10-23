import React from "react";
import "./SpecialCard.css";

const SpecialCard = ({
  dishName,
  imageSrc,
  price,
  description,
  onAction,
  actionText,
  icon,
}) => {
  return (
    <div className="card-container">
      <div className="card-img-box">
        <img src={imageSrc} alt={dishName} className="card-img" />
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3>{dishName}</h3>
          <span className="card-price">${price}</span>
        </div>
        <p className="card-description">{description}</p>
        <div className="card-action" onClick={onAction}>
          {actionText} <span className="card-icon">{icon}</span>
        </div>
      </div>
    </div>
  );
};
export default SpecialCard;
