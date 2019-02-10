import React from "react";
import PropTypes from "prop-types";

function Hero({ data }) {
  return (
    <section className="hero">
      <div className="hero-left-decoration is-revealing" />
      <div className="hero-right-decoration is-revealing" />
      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title mt-0 is-revealing">
              {data.fields.title}
            </h1>
            <p className="hero-paragraph is-revealing">
              {data.fields.sub_title}
            </p>
            <p className="hero-cta mb-0 is-revealing">
              <a
                className="button button-primary button-shadow"
                href={data.fields.button_link}
              >
                {data.fields.button_text}
              </a>
            </p>
          </div>
          <div className="hero-illustration" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  data: PropTypes.object.isRequired
};

export default Hero;
