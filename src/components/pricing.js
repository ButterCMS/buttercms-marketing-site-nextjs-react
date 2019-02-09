import React from "react";
import PropTypes from "prop-types";

function Pricing({ data }) {
  return (
    <section className="pricing section">
      <div className="container">
        <div className="pricing-inner section-inner">
          <h2 className="section-title mt-0 text-center">
            {data.fields.title}
          </h2>
          <div>
            <div className="pricing-tables-wrap">
              {data.fields.pricing.map((preset, index) => {
                return (
                  <div className="pricing-table" key={index}>
                    <div className="pricing-table-inner">
                      <div className="pricing-table-main">
                        <div className="pricing-table-header mb-24 pb-24">
                          <div className="pricing-table-title h4 mt-0 mb-16">
                            {preset.title}
                          </div>
                          <div className="pricing-table-price">
                            <span className="pricing-table-price-currency">
                              $
                            </span>
                            <span className="pricing-table-price-amount h1">
                              {preset.price}
                            </span>
                            /m
                          </div>
                        </div>
                        <ul className="pricing-table-features list-reset text-xs">
                          {preset.features}
                        </ul>
                      </div>
                      <div className="pricing-table-cta">
                        <a
                          className="button button-secondary button-shadow button-block"
                          href={preset.button_link}
                        >
                          {preset.button_text}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Pricing.propTypes = {
  data: PropTypes.object.isRequired
};

export default Pricing;
