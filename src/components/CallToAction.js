import React from "react";
import PropTypes from "prop-types";
import "./CallToAction.css";

const CallToAction = ({
  title,
  location,
  description,
  buttonText,
  onButtonClick,
  imageUrl,
  imageAlt,
}) => {
  return (
    <section className="cta-container">
      <div className="cta-content">
        <div className="cta-text">
          <h2 className="title">{title}</h2>
          <h3 className="location">{location}</h3>
          <p className="cta-description">{description}</p>
          <button className="cta-button" onClick={onButtonClick}>
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
  onButtonClick: PropTypes.func.isRequired,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
};
export default CallToAction;
