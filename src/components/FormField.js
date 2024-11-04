import React from "react";
import PropTypes from "prop-types";
import "./../styles/FormField.css";

const FormField = ({
  label,
  type,
  name,
  value,
  onChange,
  required = false,
  ...rest
}) => {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="form-input"
        {...rest}
      />
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  reguired: PropTypes.bool,
};

export default FormField;
