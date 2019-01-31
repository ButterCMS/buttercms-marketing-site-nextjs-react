import React, { Component } from "react";

import Logo from "../assets/images/logo.svg";

class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <div className="container">
          <div className="site-header-inner">
            <div className="brand header-brand">
              <h1 className="m-0">
                <a href="#">
                  <img src={Logo} alt="Blue logo" />
                </a>
              </h1>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
