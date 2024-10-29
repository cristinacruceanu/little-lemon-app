import React from "react";
import "./../../styles/Reservation/Reservation.css";

const ReservationButton = ({ label, onClick }) => {
  return (
   <button type="button" className="reservation-button" onClick={onClick}>{label}</button>
  );
};

export default ReservationButton;
