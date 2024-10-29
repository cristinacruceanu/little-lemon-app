import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./../styles/CallToAction.css";

const CallToAction = ({
  title,
  location,
  description,
  buttonText,
  imageUrl,
  imageAlt,
}) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/reserve-table");
  };
  return (
    <section className="cta-container">
      <div className="cta-content">
        <div className="cta-text">
          <h2 className="restaurant-title">{title}</h2>
          <h3 className="restaurant-location">{location}</h3>
          <p className="description">{description}</p>
          <button className="cta-button" onClick={handleNavigate}>
            {buttonText}
          </button>
        </div>

        {imageUrl && (
          <img src={imageUrl} alt={imageAlt} className="cta-image" />
        )}
      </div>
    </section>
  );
};

CallToAction.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
};
export default CallToAction;
