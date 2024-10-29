import React from "react";
import "./../../styles/Reservation/ReservationImages.css";

const ReservationImages = ({ image1,image2 }) => {
  return (
    <div className="reservation-images-container">
      <div className="reservation-images">
        <img src={image1} alt="Restaurant" className="reservation-image" />
      </div>
      <div className="reservation-images">
        <img src={image2} alt="Chef Adrian " className="reservation-image" />
      </div>
    </div>
  );
};

export default ReservationImages;
