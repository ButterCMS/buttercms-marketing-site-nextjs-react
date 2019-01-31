import React, { Component } from "react";

import MicrosoftLogo from "../assets/images/microsoft-logo.svg";
import HubspotLogo from "../assets/images/hubspot-logo.svg";
import TinderLogo from "../assets/images/tinder-logo.svg";
import AirbnbLogo from "../assets/images/airbnb-logo.svg";
import FacebookLogo from "../assets/images/facebook-logo.svg";

class Clients extends Component {
  render() {
    return (
      <section className="clients section">
        <div className="container">
          <div className="clients-inner section-inner has-top-divider">
            <div className="container-sm">
              <ul className="list-reset mb-0">
                <li className="is-revealing">
                  <img src={FacebookLogo} alt="Facebook logo" />
                </li>
                <li className="is-revealing">
                  <img src={TinderLogo} alt="Tinder logo" />
                </li>
                <li className="is-revealing">
                  <img src={AirbnbLogo} alt="Airbnb logo" />
                </li>
                <li className="is-revealing">
                  <img src={MicrosoftLogo} alt="Microsoft logo" />
                </li>
                <li className="is-revealing">
                  <img src={HubspotLogo} alt="Hubspot logo" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Clients;
