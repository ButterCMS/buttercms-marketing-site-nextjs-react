import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";

function Hero({ data }) {
  return (
    <section className="hero">
      <div className="hero-left-decoration" />
      <div className="hero-right-decoration" />
      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title mt-0">{data.fields.title}</h1>
            <p className="hero-paragraph">{data.fields.sub_title}</p>
            <p className="hero-cta mb-0">
              <a className="button button-primary button-shadow" href="#">
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
