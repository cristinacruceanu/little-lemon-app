import React, { useContext } from "react";
import "./../../styles/Reservation/Reservation.css";
import { useNavigate } from "react-router-dom";
import { ReservationContext } from "../../context/ReservationContext";
import FormField from "./../FormField";
import Button from "../Button";

const ReservationForm = () => {
  const { availableTimes, formData, updateTimes, setDate, setFormData } =
    useContext(ReservationContext);
  const navigate = useNavigate();

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    updateTimes(selectedDate);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login-page");
    console.log("Form submitted:", formData, availableTimes);
  };
  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <FormField
          label="Date"
          type="date"
          name="date"
          value={formData.date || ""}
          onChange={handleDateChange}
          required={true}
          min={new Date().toISOString().split("T")[0]}
        />{" "}
        <FormField
          label="Time"
          type="time"
          name="time"
          options={availableTimes}
          value={formData.time || ""}
          onChange={handleChange}
          required={true}
        />{" "}
      </div>
      <div className="form-column">
        <FormField
          label="Number of Diners"
          type="number"
          name="diners"
          min={1}
          value={formData.diners || ""}
          onChange={handleChange}
          required={true}
        />{" "}
        <FormField
          label="Occasion"
          type="text"
          name="occasion"
          value={formData.occasion || ""}
          onChange={handleChange}
          d
          required={true}
        />
        <FormField
          label="Seating Options:"
          name="seating"
          type="radio"
          options={[
            { value: "Standard", label: "Standard" },
            { value: "Outside", label: "Outside" },
          ]}
          value={formData.seating || ""}
          /*onChange={(e) => handleRadioChange(e.target.value)}*/
          onChange={handleChange}
        />
      </div>
      <div className="button-container">
        <Button variant="primary" type="submit">
          Next
        </Button>
      </div>
    </form>
  );
};

export default ReservationForm;
