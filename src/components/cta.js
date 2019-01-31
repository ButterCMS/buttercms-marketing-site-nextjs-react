import React, { Component } from "react";

class Cta extends Component {
  render() {
    return (
      <section className="cta section">
        <div className="container">
          <div className="cta-inner section-inner is-revealing">
            <h3 className="section-title mt-0">Still not convinced?</h3>
            <div className="cta-cta">
              <a className="button button-primary button-shadow" href="#">
                Schedule a live demo
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cta;
