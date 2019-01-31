import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-left-decoration is-revealing" />
        <div className="hero-right-decoration is-revealing" />
        <div className="container">
          <div className="hero-inner">
            <div className="hero-copy">
              <h1 className="hero-title mt-0 is-revealing">
                Landing template for startups
              </h1>
              <p className="hero-paragraph is-revealing">
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p>
              <p className="hero-cta mb-0 is-revealing">
                <a className="button button-primary button-shadow" href="#">
                  Get started free
                </a>
              </p>
            </div>
            <div className="hero-illustration" />
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
