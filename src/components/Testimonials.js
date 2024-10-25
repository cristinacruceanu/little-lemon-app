import React from "react";
import "./../styles/Testimonials.css";
import TestimonialCard from "./TestimonialCard";

const Testimonials = ({ title, testimonials }) => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">{title}</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            customerName={testimonial.customerName}
            customerImage={testimonial.customerImage}
            feedback={testimonial.feedback}
            location={testimonial.location}
            rating={testimonial.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
