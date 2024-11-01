import React from "react";
import "./../styles/Specials.css";
import SpecialCard from "./SpecialCard.js";
import Button from "./Button";

const Specials = ({ sectionTitle, buttonText, specials,onAction, actionText,icon }) => {
  return (
    <section className="specials-section">
      <div className="specials-header">
        <h1>{sectionTitle}</h1>
        <Button variant="primary">{buttonText}</Button>
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
