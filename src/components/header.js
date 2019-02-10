import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

function Header({ data }) {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand header-brand">
            <h1 className="m-0">
              <Link href="/">
                <a>
                  <img src={data.fields.logo} alt={data.fields.company_name} />
                </a>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  data: PropTypes.object.isRequired
};

export default Header;
