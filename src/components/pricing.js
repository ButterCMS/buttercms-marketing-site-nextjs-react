import React, { Component } from "react";

class Pricing extends Component {
  render() {
    return (
      <section className="pricing section">
        <div className="container">
          <div className="pricing-inner section-inner">
            <h2 className="section-title mt-0 text-center">Pricing</h2>
            <div>
              <div className="pricing-tables-wrap">
                <div className="pricing-table">
                  <div className="pricing-table-inner">
                    <div className="pricing-table-main">
                      <div className="pricing-table-header mb-24 pb-24">
                        <div className="pricing-table-title h4 mt-0 mb-16">
                          Startup
                        </div>
                        <div className="pricing-table-price">
                          <span className="pricing-table-price-currency">
                            $
                          </span>
                          <span className="pricing-table-price-amount h1">
                            29
                          </span>
                          /m
                        </div>
                      </div>
                      <ul className="pricing-table-features list-reset text-xs">
                        <li>
                          <span>Lorem ipsum dolor sit amet</span>
                        </li>
                        <li>
                          <span>Lorem ipsum dolor sit amet</span>
                        </li>
                        <li>
                          <span>Lorem ipsum dolor sit amet</span>
                        </li>
                        <li>
                          <span>Lorem ipsum dolor sit amet</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-table-cta">
                      <a
                        className="button button-secondary button-shadow button-block"
                        href="#"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pricing-table">
                  <div className="pricing-table-inner">
                    <div className="pricing-table-main">
                      <div className="pricing-table-header mb-24 pb-24">
                        <div className="pricing-table-title h4 mt-0 mb-16">
                          Enterprise
                        </div>
                        <div className="pricing-table-price">
                          <span className="pricing-table-price-currency">
                            $
                          </span>
                          <span className="pricing-table-price-amount h1">
                            49
                          </span>
                          /m
                        </div>
                      </div>
                      <ul className="pricing-table-features list-reset text-xs">
                        <li>
                          <span>Lorem ipsum dolor sit amet</span>
                        </li>
                        <li>
                          <span>Lorem ipsum dolor sit amet</span>
                        </li>
                        <li>
                          <span>Lorem ipsum dolor sit amet</span>
                        </li>
                        <li>
                          <span>Lorem ipsum dolor sit amet</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-table-cta">
                      <a
                        className="button button-primary button-shadow button-block"
                        href="#"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Pricing;
