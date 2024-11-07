import React from "react";
import PropTypes from "prop-types";
import "./../styles/Button.css";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  isLoading = false,
  disabled = false,
  icon,ariaLabel, ...rest
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${isLoading ? "btn-loading" : ""}`}
      onClick={onClick}
      disabled={disabled || isLoading}
      aria-label={ariaLabel}
      {...rest}
    >
      {isLoading ? (
        <span className="loader" />
      ) : (
        <>
          {children}
          {/*  {icon && <span className="btn-icon">{icon}</span>}{" "}
          Optional Icon */}
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
   icon: PropTypes.node,
  ariaLabel:PropTypes.string,
};

export default Button;
