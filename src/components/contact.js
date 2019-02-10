import React from "react";
import PropTypes from "prop-types";

function Contact({ data }) {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta-inner section-inner ">
          <h3 className="section-title mt-0">{data.fields.description}</h3>
          <div className="cta-cta">
            <a
              className="button button-primary button-shadow"
              href={data.fields.button_link}
            >
              {data.fields.button_text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

Contact.propTypes = {
  data: PropTypes.object.isRequired
};

export default Contact;
