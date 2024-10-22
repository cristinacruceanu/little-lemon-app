import React from "react";
import "./Specials.css";
import SpecialCard from "./SpecialCard.js";

const Specials = ({ sectionTitle, buttonText, specials }) => {
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
            dishName={special.dishName}
            imageSrc={special.imageSrc}
            description={special.description}
            price={special.price}
          />
        ))}
      </div>
    </section>
  );
};
export default Specials;
