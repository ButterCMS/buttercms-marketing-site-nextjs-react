import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";

function Clients({ data }) {
  return (
    <section className="clients section">
      <div className="container">
        <div className="clients-inner section-inner has-top-divider">
          <div className="container-sm">
            <ul className="list-reset mb-0">
              <li>
                <img src={data.fields.client_1} alt="Client logo" />
              </li>
              <li>
                <img src={data.fields.client_2} alt="Client logo" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

Clients.propTypes = {
  data: PropTypes.object.isRequired
};

export default Clients;
