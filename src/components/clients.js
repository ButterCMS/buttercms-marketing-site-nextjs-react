import React from "react";
import PropTypes from "prop-types";

import Client, { ClientPropTypes } from "./client";

export const ClientsPropTypes = {
  clients: PropTypes.arrayOf(PropTypes.exact(ClientPropTypes)),
};

function Clients({ clients }) {
  return (
    <section className="clients section">
      <div className="container">
        <div className="clients-inner section-inner has-top-divider">
          <div className="container-sm">
            <ul className="list-reset mb-0">
              {clients.map(({ image, name }, index) => {
                return <Client key={index} name={name} image={image}></Client>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

Clients.propTypes = ClientsPropTypes;

export default Clients;
