import React from "react";
import "./../../styles/Reservation/ReservationCheckbox.css";

const ReservationButton = ({ label, onClick }) => {
  return (
   <button type="button" className="reservation-button" onClick={onClick}>{label}</button>
  );
};

export default ReservationButton;
