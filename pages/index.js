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
import { DataConsumer } from "../src/lib/with-butter-cms";
import Loader from "../src/assets/images/loader.svg";

class Index extends Component {
  render() {
    return (
      <Fragment>
        <Head>
          <title>Marketing Site using ButterCMS and Next.js</title>
        </Head>
        <DataConsumer>
          {({
            loading,
            heroData,
            clientsData,
            featuresData,
            testimonialsData,
            pricingData
          }) => {
            if (loading)
              return (
                <div className="loading">
                  <img src={Loader} />
                  <style jsx>
                    {`
                      .loading {
                        margin: 0 auto;
                        display: flex;
                        justify-content: center;
                        font-size: 14px;
                      }
                    `}
                  </style>
                </div>
              );

            return (
              <Fragment>
                <Hero data={heroData} />
                <Clients data={clientsData} />
                <Features data={featuresData} />
                <Testimonials data={testimonialsData} />
                <Pricing data={pricingData} />
                <Cta />
              </Fragment>
            );
          }}
        </DataConsumer>
      </Fragment>
    );
  }
}

export default Index;
