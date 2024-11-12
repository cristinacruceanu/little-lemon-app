import React, { useState, useContext } from "react";
import "./../../styles/Reservation/Reservation.css";
import { useNavigate } from "react-router-dom";
import { ReservationContext } from "../../context/ReservationContext";
import FormField from "./../FormField";
import Button from "../Button";

const ReservationForm = ({availableTimes, onDateChange}) => {
  const { setReservationData } = useContext(ReservationContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    diners: "",
    occasion: "",
    seating: "",
  });

/*
    const [availableTimes, setAvailableTimes] = useState([
      "12:00 PM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
      "5:00 PM",
      "6:00 PM",
      "7:00 PM",
      "8:00 PM",
    ]);
    /*const handleRadioChange = (value) => {
    setFormData((prevData) => ({ ...prevData, seating: value }));
  }; - handle change for the radio buttons if this was the only field, otherwise use the dynamic [name]

  /*const [reservationDetails, setReservationDetails] = useState(null);
  setReservationDetails(formData);used inside the handle Submit directly if details are needed in the next page to avoid useContext
      navigate("/login-page", { state: reservationDetails }); - used inside the handle Submit directly if details are needed in the next page to avoid useContext
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
