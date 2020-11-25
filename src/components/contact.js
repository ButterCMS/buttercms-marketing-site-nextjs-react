import React from "react";
import PropTypes from "prop-types";

export const ContactPropTypes = {
  description: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
};

function Contact({ description, buttonLink, buttonText }) {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta-inner section-inner ">
          <h3 className="section-title mt-0">{description}</h3>
          <div className="cta-cta">
            <a
              className="button button-primary button-shadow"
              href={buttonLink}
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

Contact.propTypes = ContactPropTypes;

export default Contact;
