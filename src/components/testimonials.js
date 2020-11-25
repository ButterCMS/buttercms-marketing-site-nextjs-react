import React from "react";
import PropTypes from "prop-types";

import Testimonial, { TestimonialPropTypes } from "./testimonial";

export const TestimonialsPropTypes = {
  headline: PropTypes.string.isRequired,
  testimonials: PropTypes.arrayOf(PropTypes.exact(TestimonialPropTypes)),
};

function Testimonials({ headline, testimonials }) {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="testimonials-inner section-inner">
          <div className="testimonials-header text-center text-light">
            <h2 className="section-title mt-0">{headline}</h2>
          </div>
          <div className="testimonials-wrap">
            {testimonials.map(({ body, author }, index) => {
              return (
                <Testimonial
                  key={index}
                  body={body}
                  author={author}
                ></Testimonial>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

Testimonials.propTypes = TestimonialsPropTypes;

export default Testimonials;
