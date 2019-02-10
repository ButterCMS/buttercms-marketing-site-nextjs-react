import React, { Component, Fragment } from "react";
import Head from "next/head";
import Butter from "buttercms";

import Clients from "../src/components/clients";
import Contact from "../src/components/contact";
import Features from "../src/components/features";
import Footer from "../src/components/footer";
import Header from "../src/components/header";
import Hero from "../src/components/hero";
import Pricing from "../src/components/pricing";
import Testimonials from "../src/components/testimonials";
import FAQ from "../src/components/faq";
import Loader from "../src/assets/images/loader.svg";

const ButterCMSContext = React.createContext();
const butter = Butter(process.env.BUTTER_CMS_API_KEY);

class Index extends Component {
  data = {
    loading: true,
    heroData: {},
    clientsData: {},
    featuresData: {},
    testimonialsData: {},
    generalData: {}
  };

  static async getInitialProps() {
    try {
      const response = await Promise.all([
        butter.page.retrieve("*", "hero"),
        butter.page.retrieve("*", "clients"),
        butter.page.retrieve("*", "features"),
        butter.page.retrieve("*", "testimonials"),
        butter.page.retrieve("*", "pricing"),
        butter.page.retrieve("*", "contact"),
        butter.page.retrieve("*", "general"),
        butter.page.retrieve("*", "faqs")
      ]);

      this.data = {
        heroData: response[0].data.data,
        clientsData: response[1].data.data,
        featuresData: response[2].data.data,
        testimonialsData: response[3].data.data,
        pricingData: response[4].data.data,
        contactData: response[5].data.data,
        generalData: response[6].data.data,
        faqsData: response[7].data.data,
        loading: false
      };
    } catch (error) {
      console.error(error);
    }

    return {
      data: this.data
    };
  }

  render() {
    const { data } = this.props;

    return (
      <Fragment>
        <Head>
          <title>Marketing Site using ButterCMS and Next.js</title>
        </Head>
        <ButterCMSContext.Provider
          value={{
            loading: data.loading,
            heroData: data.heroData,
            clientsData: data.clientsData,
            featuresData: data.featuresData,
            testimonialsData: data.testimonialsData,
            pricingData: data.pricingData,
            contactData: data.contactData,
            generalData: data.generalData,
            faqsData: data.faqsData
          }}
        >
          <ButterCMSContext.Consumer>
            {({
              loading,
              heroData,
              clientsData,
              featuresData,
              testimonialsData,
              pricingData,
              contactData,
              generalData,
              faqsData
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
                          height: 100vh;
                        }
                      `}
                    </style>
                  </div>
                );

              return (
                <Fragment>
                  <Header data={generalData} />
                  <Hero data={heroData} />
                  <Clients data={clientsData} />
                  <Features data={featuresData} />
                  <Testimonials data={testimonialsData} />
                  <Pricing data={pricingData} />
                  <FAQ data={faqsData} />
                  <Contact data={contactData} />
                  <Footer data={generalData} />
                </Fragment>
              );
            }}
          </ButterCMSContext.Consumer>
        </ButterCMSContext.Provider>
      </Fragment>
    );
  }
}

export default Index;
