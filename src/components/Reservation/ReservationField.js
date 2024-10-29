import React from "react";
import "./../../styles/Reservation/Reservation.css";

const ReservationField = ({label,type,name, ...rest}) => {
  return (
    <div className="reservation-field">
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} {...rest} />
    </div>
  );
};

export default ReservationField;
