import React from "react";
import "./Specials.css";
import SpecialCard from "./SpecialCard.js";

const Specials = ({ sectionTitle, buttonText, specials,onAction, actionText,icon }) => {
  return (
    <section className="specials-section">
      <div className="specials-header">
        <h1>{sectionTitle}</h1>
        <button className="specials-button">{buttonText}</button>
      </div>
      <div className="specials-card-container">
        {specials.map((special, index) => (
          <SpecialCard
            key={index}
            imageSrc={special.imageSrc}
            dishName={special.dishName}
            price={special.price}
            description={special.description}
            onAction={onAction}
            actionText={actionText}
            icon={icon}
          />
        ))}
      </div>
    </section>
  );
};
export default Specials;
