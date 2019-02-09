import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import withButter from "../lib/with-butter-cms";

import FeatureIcon1 from "../assets/images/feature-icon-01.svg";

function Features(props) {
  const [fields, setFields] = useState({ fields: [] });
  const [error, setError] = useState({ data: {} });
  const fetchData = async () => {
    try {
      const response = await props.butter.page.retrieve("*", "features");

      setFields(response.data.data.fields);
    } catch (error) {
      setError(error.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="features section text-center">
      <div className="container">
        <div className="features-inner section-inner has-top-divider">
          <div className="features-header text-center">
            <div className="container-sm">
              <h2 className="section-title mt-0">{fields.title}</h2>
              <p className="section-paragraph mb-0">{fields.sub_title}</p>
            </div>
          </div>
          <div className="features-wrap">
            {fields.features &&
              fields.features.map((feature, index) => {
                return (
                  <div className="feature" key={index}>
                    <div className="feature-inner">
                      <div className="feature-icon">
                        <img src={FeatureIcon1} alt="Feature 01" />
                      </div>
                      <h4 className="feature-title">{feature.title}</h4>
                      <p className="text-sm">{feature.sub_title}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

Features.propTypes = {
  butter: PropTypes.object.isRequired
};

export default withButter(Features);
