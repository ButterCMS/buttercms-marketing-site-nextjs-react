import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import withButter from "../lib/with-butter-cms";

function Clients(props) {
  const [fields, setFields] = useState({ fields: [] });
  const [error, setError] = useState({ data: {} });
  const fetchData = async () => {
    try {
      const response = await props.butter.page.retrieve("*", "clients");

      setFields(response.data.data.fields);
    } catch (error) {
      setError(error.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="clients section">
      <div className="container">
        <div className="clients-inner section-inner has-top-divider">
          <div className="container-sm">
            <ul className="list-reset mb-0">
              <li className="is-revealing">
                <img src={fields.client_1} alt="Client logo" />
              </li>
              <li className="is-revealing">
                <img src={fields.client_2} alt="Client logo" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

Clients.propTypes = {
  butter: PropTypes.object.isRequired
};

export default withButter(Clients);
