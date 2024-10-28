import React from "react";
import "./../../styles/Reservation/ReservationForm.css";
import ReservationField from "./../Reservation/ReservationField";
import ReservationCheckbox from "./../Reservation/ReservationCheckbox";



const ReservationForm = () => {
  return (
    <form className="reservation-form">
      <div className="form-row">
        <ReservationField label="Date" type="date" name="date" />{" "}
        <ReservationField label="Time" type="time" name="time" />
      </div>
      <div className="form-row">
        <ReservationField
          label="Number of Diners"
          type="number"
          name="diners"
          min="1"
        />{" "}
        <ReservationField label="Occasion" type="text" name="occasion" />
      </div>
      <ReservationCheckbox label="Outdoor Seating" name="outdoorSeating"/>
    </form>
  );
};

export default ReservationForm;
