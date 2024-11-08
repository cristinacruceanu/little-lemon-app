import React, { useState } from "react";
import "./../../styles/Reservation/Reservation.css";

const ReservationRadioGroup = ({ options, onChange, required = true, name }) => {
  const [selectedOption, setSelectedOption] = useState([]);

  const handleRadioChange = (option) => {
    setSelectedOption(option);
    if (onChange) {
      onChange(option);
    }
  };
  return (
    <div className="reservation-radio-group">
      <p>Seating options:</p>
      {options.map((option) => (
        <label key={option} className="reservation-radio-label">
          <input
            type="radio"
            name={name}
            value={option}
            checked={selectedOption === option}
            onChange={() => handleRadioChange(option)}
            required={required}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default ReservationRadioGroup;
