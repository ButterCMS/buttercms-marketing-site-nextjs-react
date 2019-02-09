import React, { Component } from "react";
import App, { Container } from "next/app";
import dynamic from "next/dynamic";

import "../src/assets/css/style.css";
import Footer from "../src/components/footer";
import Header from "../src/components/header";
import DataProvider from "../src/lib/with-butter-cms";

class MyApp extends App {
  componentDidMount() {
    import("../src/assets/js/main.js");
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <div className="body-wrap boxed-container">
          <DataProvider>
            <main>
              <Component {...pageProps} />
            </main>
          </DataProvider>
        </div>
      </Container>
    );
  }
}

export default MyApp;
