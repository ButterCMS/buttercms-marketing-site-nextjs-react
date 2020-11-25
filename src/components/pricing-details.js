import React from "react";
import PropTypes from "prop-types";

export const PricingDetailsPropTypes = {
  headline: PropTypes.string.isRequired,
  price: PropTypes.string,
  features: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
};

function PricingDetails({ headline, price, features, buttonLink, buttonText }) {
  return (
    <div className="pricing-table">
      <div className="pricing-table-inner">
        <div className="pricing-table-main">
          <div className="pricing-table-header mb-24 pb-24">
            <div className="pricing-table-title h4 mt-0 mb-16">{headline}</div>
            <div className="pricing-table-price">
              <span className="pricing-table-price-currency">$</span>
              <span className="pricing-table-price-amount h1">{price}</span>
              /m
            </div>
          </div>
          <ul className="pricing-table-features list-reset text-xs">
            {features}
          </ul>
        </div>
        <div className="pricing-table-cta">
          <a
            className="button button-secondary button-shadow button-block"
            href={buttonLink}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}

PricingDetails.propTypes = PricingDetailsPropTypes;

export default PricingDetails;
