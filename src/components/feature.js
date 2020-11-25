import React from "react";
import PropTypes from "prop-types";

import FeatureIcon1 from "../assets/images/feature-icon-01.svg";

export const FeaturePropTypes = {
  headline: PropTypes.string,
  subheadline: PropTypes.string,
};

function Feature({ headline, subheadline }) {
  return (
    <div className="feature">
      <div className="feature-inner">
        <div className="feature-icon">
          <img src={FeatureIcon1} alt="Feature 01" />
        </div>
        <h4 className="feature-title">{headline}</h4>
        <p className="text-sm">{subheadline}</p>
      </div>
    </div>
  );
}

Feature.propTypes = FeaturePropTypes;

export default Feature;
