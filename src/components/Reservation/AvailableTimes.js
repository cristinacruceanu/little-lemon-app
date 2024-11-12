import React, {useState} from "react";
import "./../../styles/Reservation/Reservation.css";

const AvailableTimes = () => {
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

  const [selectedTime, setSelectedTime] = useState("");

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };
  return (
    <>
      <label htmlFor="time-select">Time: </label>
      <select
        id="time-select"
        value={selectedTime}
        onChange={handleTimeChange}
        aria-label="Booking time"
        required
      >
        <option value="" disabled>
          Choose a time
        </option>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>
    </>
  );
};
export default AvailableTimes;
