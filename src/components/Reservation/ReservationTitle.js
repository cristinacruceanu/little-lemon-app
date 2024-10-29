import React from "react";
import "./../../styles/Reservation/Reservation.css";

const ReservationTitle = ({title,subtitle,description}) => {
  return (
    <div className="reservation-title">
      <h1 className="restaurant-title">{title}</h1>
      <h2 className="restaurant-location">{subtitle}</h2>
      <p className="description">{description}</p>
    </div>
  );
};

export default ReservationTitle;
