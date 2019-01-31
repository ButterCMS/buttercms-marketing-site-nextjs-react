import React, { Component } from "react";
import App, { Container } from "next/app";
import dynamic from "next/dynamic";

import "../assets/css/style.css";
import HeaderBgLeft from "../assets/images/header-bg-left.svg";
import TabsIcon3 from "../assets/images/tabs-icon-03.svg";
import TabsIcon2 from "../assets/images/tabs-icon-02.svg";
import TabsIcon1 from "../assets/images/tabs-icon-01.svg";
import HeaderBgRight from "../assets/images/header-bg-right.svg";
import Footer from "../components/footer";
import Header from "../components/header";

export default class MyApp extends App {
  componentDidMount() {
    import("../assets/js/main.js");
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <div className="body-wrap boxed-container">
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </Container>
    );
  }
}
