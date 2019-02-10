import React, { Component, Fragment } from "react";
import Head from "next/head";
import Butter from "buttercms";

import Blogs from "../src/components/blogs";
import Contact from "../src/components/contact";
import Loader from "../src/assets/images/loader.svg";
import Footer from "../src/components/footer";
import Header from "../src/components/header";

const ButterCMSContext = React.createContext();
const butter = Butter(process.env.BUTTER_CMS_API_KEY);

class BlogsPage extends Component {
  data = {
    loading: true,
    generalData: {},
    blogsData: {},
    contactData: {}
  };

  static async getInitialProps() {
    try {
      const response = await Promise.all([
        butter.page.retrieve("*", "general"),
        butter.page.retrieve("*", "blogs"),
        butter.page.retrieve("*", "contact")
      ]);

      this.data = {
        generalData: response[0].data.data,
        blogsData: response[1].data.data,
        contactData: response[2].data.data,
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
            generalData: data.generalData,
            blogsData: data.blogsData,
            contactData: data.contactData
          }}
        >
          <ButterCMSContext.Consumer>
            {({ loading, generalData, blogsData, contactData }) => {
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
                  <Blogs data={blogsData} />
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

export default BlogsPage;
