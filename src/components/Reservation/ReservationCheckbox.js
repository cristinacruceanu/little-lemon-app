import React from "react";
import "./../../styles/Reservation/ReservationCheckbox.css";

const ReservationCheckbox = ({ label, name }) => {
  return (
    <div className="reservation-checkbox">
     <input type="checkbox" id={name} name={name}/>
   <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default ReservationCheckbox;
