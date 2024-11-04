import React from "react";
import "./../../styles/Reservation/Reservation.css";
import FormField from "./../FormField";
import ReservationRadioGroup from "./ReservationRadioGroup";

const ReservationForm = () => {
  return (
    <form className="reservation-form">
      <div className="form-row">
        <FormField label="Date" type="date" name="date" />{" "}
        <FormField label="Time" type="time" name="time" />
      </div>
      <div className="form-column">
        <FormField
          label="Number of Diners"
          type="number"
          name="diners"
          min="1"
        />{" "}
        <FormField label="Occasion" type="text" name="occasion" />
        <ReservationRadioGroup options={["Standard", "Outside"]} />
      </div>
    </form>
  );
};

export default ReservationForm;
