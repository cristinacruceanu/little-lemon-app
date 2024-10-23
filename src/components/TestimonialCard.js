import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({customerName, customerImage, feedback, location})=> {
return (
  <div className="testimonial-card">
    <img src={customerImage} alt={`${customerName}'s portrait`} className="customer-image"/>
    <h3 className="customer-name">{customerName}</h3>
    <p className="customer-location">{location}</p>
    <p className="feedback">"{feedback}"</p>
  </div>
);
};

export default TestimonialCard;