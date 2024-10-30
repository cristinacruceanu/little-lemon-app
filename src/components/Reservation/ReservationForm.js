import React from "react";
import "./../../styles/Reservation/Reservation.css";
import ReservationField from "./../Reservation/ReservationField";
import ReservationRadioGroup from "./ReservationRadioGroup";

const ReservationForm = () => {
  return (
    <form className="reservation-form">
      <div className="form-row">
        <ReservationField label="Date" type="date" name="date" />{" "}
        <ReservationField label="Time" type="time" name="time" />
      </div>
      <div className="form-column">
        <ReservationField
          label="Number of Diners"
          type="number"
          name="diners"
          min="1"
        />{" "}
        <ReservationField label="Occasion" type="text" name="occasion" />
        <ReservationRadioGroup options={["Standard", "Outside"]} />
      </div>
    </form>
  );
};

export default ReservationForm;
