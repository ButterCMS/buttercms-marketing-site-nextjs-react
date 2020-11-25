import React from "react";

import Router from "next/router";

import Butter from "buttercms";

import Layout from "../src/components/layout";

import Loader from "../src/assets/images/loader.svg";

import "../src/assets/css/style.css";

const butter = Butter(process.env.BUTTER_CMS_API_KEY);

function App({ Component, pageProps, generalData }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    import("../src/assets/js/main.js");

    const showLoader = () => {
      setLoading(true);
    };

    const removeLoader = () => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", showLoader);
    Router.events.on("routeChangeComplete", removeLoader);
    Router.events.on("routeChangeError", removeLoader);

    return () => {
      Router.events.off("routeChangeStart", showLoader);
      Router.events.off("routeChangeComplete", removeLoader);
      Router.events.off("routeChangeError", removeLoader);
    };
  }, []);

  return (
    <div className="body-wrap boxed-container">
      <main>
        {loading ? (
          <div
            className="loader"
            style={{
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              fontSize: "14px",
              height: "100vh",
            }}
          >
            <img src={Loader} />
          </div>
        ) : (
          <Layout
            companyName={generalData.company_name}
            logo={generalData.logo}
            navigationLinks={generalData.navigation_links}
            facebookUrl={generalData.facebook_url}
            twitterUrl={generalData.twitterUrl}
            googleUrl={generalData.google_url}
          >
            <Component {...pageProps} />
          </Layout>
        )}
      </main>
    </div>
  );
}

App.getInitialProps = async () => {
  const generalData = (await butter.page.retrieve("*", "marketing-page")).data
    .data.fields.general;
  return { generalData };
};

export default App;
