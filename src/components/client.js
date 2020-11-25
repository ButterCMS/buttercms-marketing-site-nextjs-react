import React from "react";
import PropTypes from "prop-types";

export const ClientPropTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

function Client({ image, name }) {
  return <img src={image} alt={name} style={{ maxHeight: "200px" }} />;
}

Client.propTypes = ClientPropTypes;

export default Client;
