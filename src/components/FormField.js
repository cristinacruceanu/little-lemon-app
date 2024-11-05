import React from "react";
import PropTypes from "prop-types";
import "./../styles/FormField.css";

const FormField = ({
  label,
  type,
  name,
  value,
  onChange,
  required = false,textarea=false, rows=4,
  ...rest
}) => {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows}
          className="form-textarea"
          {...rest}
        />
      ):(
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="form-input"
        {...rest}
      />)}
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  textarea:PropTypes.bool,
  rows:PropTypes.number,
};

export default FormField;
