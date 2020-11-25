import React from "react";

import Loader from "../src/assets/images/loader.svg";

import "../src/assets/css/style.css";

import Router from "next/router";

export default function App({ Component, pageProps }) {
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
          <Component {...pageProps} />
        )}
      </main>
    </div>
  );
}
