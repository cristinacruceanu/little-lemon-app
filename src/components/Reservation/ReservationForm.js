import React, { useState, useContext } from "react";
import "./../../styles/Reservation/Reservation.css";
import { useNavigate } from "react-router-dom";
import { ReservationContext } from "../../context/ReservationContext";
import FormField from "./../FormField";
import Button from "../Button";

const ReservationForm = () => {
  const { setReservationData } = useContext(ReservationContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    diners: "",
    occasion: "",
    seating: "",
  });


  /*const handleRadioChange = (value) => {
    setFormData((prevData) => ({ ...prevData, seating: value }));
  };

  /*const [reservationDetails, setReservationDetails] = useState(null);
  setReservationDetails(formData);used inside the handle Submit
      navigate("/login-page", { state: reservationDetails }); - used inside the handle Submit
  */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReservationData(formData);
    navigate("/login-page");
    console.log("Form submitted:", formData);
  };
  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <FormField
          label="Date"
          type="date"
          name="date"
          value={formData.date || ""}
          onChange={handleChange}
          required={true}
        />{" "}
        <FormField
          label="Time"
          type="time"
          name="time"
          value={formData.time || ""}
          onChange={handleChange}
          required={true}
        />
      </div>
      <div className="form-column">
        <FormField
          label="Number of Diners"
          type="number"
          name="diners"
          min="1"
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
