import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

function Header({ logo, companyName }) {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand header-brand">
            <h1 className="m-0">
              <Link href="/">
                <a>
                  <img
                    src={logo}
                    alt={companyName}
                    style={{ maxHeight: "50px" }}
                  />
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
  companyName: PropTypes.string.isRequired,
  logo: PropTypes.string,
};

export default Header;
