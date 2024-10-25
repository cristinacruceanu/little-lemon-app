import React from "react";
import "./../styles/TestimonialCard.css";

const TestimonialCard = ({
  customerName,
  customerImage,
  feedback,
  location,
  rating,
}) => {
  const stars = Array(5)
    .fill(0)
    .map((_, index) => (
      <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
        ★
      </span>
    ));
  return (
    <div className="testimonial-card">
      <div className="testimonials-img-box">
        <img
          src={customerImage}
          alt={`${customerName}'s portrait`}
          className="customer-image"
        />
      </div>
      <h3 className="customer-name">{customerName}</h3>
      <p className="customer-location">{location}</p>
      <p className="feedback">"{feedback}"</p>
      <p className="rating">{stars}</p>
    </div>
  );
};

export default TestimonialCard;
