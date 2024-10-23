import React from "react";
import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";

const Testimonials = ({title,testimonials}) => {
  return (<section className="testimonials-section">
<h2 className="section-title">{title}</h2>
<div className="testimonials-grid">
  {testimonials.map((testimonial,index)=>(
    <TestimonialCard
      key={index}
      customerName={testimonial.customerName}
      customerImage={testimonial.customerImage}
      feedback={testimonial.feedback}
location={testimonial.location}
    />
  ))}
</div>
  </section>);
};

export default Testimonials;
