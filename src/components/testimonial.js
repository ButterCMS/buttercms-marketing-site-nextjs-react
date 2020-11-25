import React from "react";
import PropTypes from "prop-types";

export const TestimonialPropTypes = {
  body: PropTypes.string,
  author: PropTypes.string,
};

function Testimonial({ body, author }) {
  return (
    <div className="testimonial text-sm">
      <div className="testimonial-inner">
        <div className="testimonial-main">
          <div className="testimonial-body">
            <p>{body}</p>
          </div>
        </div>
        <div className="testimonial-footer">
          <div className="testimonial-name">
            <a href="#">@{author}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

Testimonial.propTypes = TestimonialPropTypes;

export default Testimonial;
