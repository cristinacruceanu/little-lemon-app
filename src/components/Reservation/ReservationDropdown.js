import React, { useContext } from "react";
import PropTypes from "prop-types";
import "../../styles/Reservation/Reservation.css";
import { ReservationContext } from "../../context/ReservationContext";

const ReservationDropdown = ({
  placeholder = "Date - Time - Number of diners",
}) => {
  const { formData } = useContext(ReservationContext);

  return (
    <div className="reservation-dropdown">
      <select className="dropdown-select">
        <option value="" disabled hidden selected>
          {placeholder}
        </option>
        {formData ? (
          Object.entries(formData).map(([key, value]) => (
            <option key={key} value={key} disabled>
              {`${key.charAt(0).toUpperCase() + key.slice(1)}:${" "}${value}`}
            </option>
          ))
        ) : (
          <option disabled>No reservation details available</option>
        )}
      </select>
    </div>
  );
};

ReservationDropdown.propTypes = {
  placeholder: PropTypes.string,
};
export default ReservationDropdown;
