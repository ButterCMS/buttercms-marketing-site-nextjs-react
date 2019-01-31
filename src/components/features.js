import React, { Component } from "react";

import FeatureIcon1 from "../assets/images/feature-icon-01.svg";
import FeatureIcon2 from "../assets/images/feature-icon-02.svg";
import FeatureIcon3 from "../assets/images/feature-icon-03.svg";
import FeatureIcon4 from "../assets/images/feature-icon-04.svg";

class Features extends Component {
  render() {
    return (
      <section className="features section text-center">
        <div className="container">
          <div className="features-inner section-inner has-top-divider">
            <div className="features-header text-center">
              <div className="container-sm">
                <h2 className="section-title mt-0">Meet Blue</h2>
                <p className="section-paragraph mb-0">
                  Lorem ipsum is common placeholder text used to demonstrate the
                  graphic elements of a document or visual presentation.
                </p>
              </div>
            </div>
            <div className="features-wrap">
              <div className="feature is-revealing">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img src={FeatureIcon1} alt="Feature 01" />
                  </div>
                  <h4 className="feature-title">Lorem Ipsum</h4>
                  <p className="text-sm">
                    often arouses curiosity due to its resemblance to
                    classNameical latin
                  </p>
                </div>
              </div>
              <div className="feature is-revealing">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img src={FeatureIcon2} alt="Feature 02" />
                  </div>
                  <h4 className="feature-title">Lorem Ipsum</h4>
                  <p className="text-sm">
                    often arouses curiosity due to its resemblance to
                    classNameical latin
                  </p>
                </div>
              </div>
              <div className="feature is-revealing">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img src={FeatureIcon3} alt="Feature 03" />
                  </div>
                  <h4 className="feature-title">Lorem Ipsum</h4>
                  <p className="text-sm">
                    often arouses curiosity due to its resemblance to
                    classNameical latin
                  </p>
                </div>
              </div>
              <div className="feature is-revealing">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img src={FeatureIcon4} alt="Feature 04" />
                  </div>
                  <h4 className="feature-title">Lorem Ipsum</h4>
                  <p className="text-sm">
                    often arouses curiosity due to its resemblance to
                    classNameical latin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
