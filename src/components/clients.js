import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";

function Clients({ data }) {
  return (
    <section className="clients section">
      <div className="container">
        <div className="clients-inner section-inner has-top-divider">
          <div className="container-sm">
            <ul className="list-reset mb-0">
              {data.fields.clients.map((client, index) => {
                return (
                  <li key={index} className="">
                    <img src={client.image} alt={client.name} />
                  </li>
                );
              })}
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
