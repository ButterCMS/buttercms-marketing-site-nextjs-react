import React, { Component, Fragment } from "react";
import Head from "next/head";

import Clients from "../components/clients";
import Cta from "../components/cta";
import Features from "../components/features";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Pricing from "../components/pricing";
import Testimonials from "../components/testimonials";

class Index extends Component {
  render() {
    return (
      <Fragment>
        <Head>
          <title>Marketing Site using ButterCMS and Next.js</title>
        </Head>
        <Hero />
        <Clients />
        <Features />
        <Testimonials />
        <Pricing />
        <Cta />
      </Fragment>
    );
  }
}

export default Index;
