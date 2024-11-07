import React, { useState } from "react";
import "./../../styles/Reservation/Reservation.css";
import {useNavigate} from "react-router-dom";
import FormField from "./../FormField";
import ReservationRadioGroup from "./ReservationRadioGroup";
import Button from "../Button";

const ReservationForm = () => {

    const navigate = useNavigate();
    
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    diners: "",
    occasion: "",
  });

  const [reservationDetails, setReservationDetails] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReservationDetails(formData);
    console.log("Form submitted:", formData);
  };
  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <FormField
          label="Date"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />{" "}
        <FormField
          label="Time"
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-column">
        <FormField
          label="Number of Diners"
          type="number"
          name="diners"
          min="1"
          value={formData.diners}
          onChange={handleChange}
          required
        />{" "}
        <FormField
          label="Occasion"
          type="text"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        />
        <ReservationRadioGroup options={["Standard", "Outside"]} />
      </div>
      <Button variant="primary" onClick={handleSubmit}>
        Next
      </Button>
    </form>
  );
};

export default ReservationForm;
