import React, { useContext } from "react";
import "./../../styles/Reservation/Reservation.css";
import { useNavigate } from "react-router-dom";
import { ReservationContext } from "../../context/ReservationContext";
import { getTodayDate } from "../../utils/Utils";
import FormField from "./../FormField";
import Button from "../Button";

const ReservationForm = () => {
  const {
    availableTimes,
    formData,
    setDate,
    setFormData,
    loading,
    submitReservation,
  } = useContext(ReservationContext);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  const isFormValid = () => {
    const { date, time, diners, occasion, seating } = formData;
    return date && time && diners && occasion && seating;
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isSuccessful = await submitReservation(formData);

    if (isSuccessful) {
      console.log("Booking data successfully saved:", formData);
      navigate("/login-page");
    } else {
      console.error("Booking details saving failed. Please try again.");
    }
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
          min={getTodayDate()}
        />{" "}
        {loading ? (
          <p> Loading available times...</p>
        ) : (
          <FormField
            label="Time"
            type="time"
            name="time"
            options={availableTimes}
            value={formData.time || ""}
            onChange={handleChange}
            required={true}
          />
        )}{" "}
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
        <Button variant="primary" type="submit" disabled={!isFormValid()}>
          Next
        </Button>
      </div>
    </form>
  );
};

export default ReservationForm;
