import React, { useState } from "react";
import PropTypes from "prop-types";
import "./../styles/FormField.css";
import EyeIcon from "./../assets/icons_assets/eye.svg";
import EyeIconOff from "./../assets/icons_assets/eye-off.svg";

const FormField = ({
  label,
  type,
  name,
  value,
  options,
  selectedValue,
  onChange,
  required = false,
  textarea = false,
  rows = 4,
  showToggleVisibility = true,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevVisibility) => !prevVisibility);
  };
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          required={required}
          className="form-textarea"
          {...rest}
        />
      ) : type === "radio" ? (
        <div className="reservation-radio-group">
          {options.map((option, index) => (
            <label key={index} className="reservation-radio-label">
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={onChange}
                required={required}
              />
              {option.label}
            </label>
          ))}
        </div>
      ) : (
        <div style={{ position: "relative" }}>
          <input
            type={type === "password" && isPasswordVisible ? "text" : type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className="form-input"
            {...rest}
          />
          {type === "password" &&
            showToggleVisibility &&(
              <span
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "35%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#000",
                  width: "30px",
                  height: "30px",
                }}
                className="password-icon"
              >
                {isPasswordVisible ? (
                  <img src={EyeIconOff} alt="Hide password" />
                ) : (
                  <img src={EyeIcon} alt="Show Password" />
                )}
              </span>
            )}
        </div>
      )}
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  textarea: PropTypes.bool,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
};

export default FormField;
