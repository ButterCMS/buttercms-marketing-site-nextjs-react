import React, { Component, Fragment } from "react";
import Head from "next/head";

import Clients from "../src/components/clients";
import Cta from "../src/components/cta";
import Features from "../src/components/features";
import Footer from "../src/components/footer";
import Header from "../src/components/header";
import Hero from "../src/components/hero";
import Pricing from "../src/components/pricing";
import Testimonials from "../src/components/testimonials";

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
