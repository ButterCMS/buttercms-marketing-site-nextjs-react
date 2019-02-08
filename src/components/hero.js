import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import withButter from "../lib/with-butter-cms";

function Hero(props) {
  const [fields, setFields] = useState({ fields: [] });
  const [error, setError] = useState({ data: {} });
  const fetchData = async () => {
    try {
      const response = await props.butter.page.retrieve("*", "hero");

      setFields(response.data.data.fields);
    } catch (error) {
      setError(error.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="hero">
      <div className="hero-left-decoration is-revealing" />
      <div className="hero-right-decoration is-revealing" />
      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title mt-0 is-revealing">{fields.title}</h1>
            <p className="hero-paragraph is-revealing">{fields.sub_title}</p>
            <p className="hero-cta mb-0 is-revealing">
              <a className="button button-primary button-shadow" href="#">
                {fields.button_text}
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
  butter: PropTypes.object.isRequired
};

export default withButter(Hero);
