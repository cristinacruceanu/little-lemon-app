import React from "react";
import "./../../styles/Reservation/ReservationTitle.css";

const ReservationTitle = ({title,subtitle,description}) => {
  return (
    <>
      <h1 className="reservation-title">{title}</h1>
      <h2 className="reservation-subtitle">{subtitle}</h2>
      <p className="description">{description}</p>
    </>
  );
};

export default ReservationTitle;
