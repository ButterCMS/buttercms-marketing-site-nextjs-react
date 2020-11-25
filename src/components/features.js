import React from "react";
import PropTypes from "prop-types";

import FeatureIcon1 from "../assets/images/feature-icon-01.svg";
import Feature, { FeaturePropTypes } from "./feature";

export const FeaturesPropTypes = {
  headline: PropTypes.string.isRequired,
  subheadline: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.exact(FeaturePropTypes)),
};

function Features({ headline, subheadline, features }) {
  return (
    <section className="features section text-center">
      <div className="container">
        <div className="features-inner section-inner has-top-divider">
          <div className="features-header text-center">
            <div className="container-sm">
              <h2 className="section-title mt-0">{headline}</h2>
              {subheadline && (
                <p className="section-paragraph mb-0">{subheadline}</p>
              )}
            </div>
          </div>
          <div className="features-wrap">
            {features.map((feature, index) => {
              return (
                <Feature
                  key={index}
                  headline={feature.headline}
                  subheadline={feature.subheadline}
                ></Feature>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

Features.propTypes = FeaturesPropTypes;

export default Features;
