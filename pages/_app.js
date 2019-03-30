import React, { Component } from "react";
import App, { Container } from "next/app";
import dynamic from "next/dynamic";
import withNProgress from "next-nprogress";

import "../src/assets/css/style.css";

class MyApp extends App {
  componentDidMount() {
    import("../src/assets/js/main.js");
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <div className="body-wrap boxed-container">
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </Container>
    );
  }
}

export default withNProgress()(MyApp);
