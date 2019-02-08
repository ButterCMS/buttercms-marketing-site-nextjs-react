import React from "react";
import Butter from "buttercms";

export default App =>
  class WithButterCMS extends React.Component {
    static async getInitialProps(ctx) {
      let appProps = {};

      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(ctx);
      }

      return { ...appProps };
    }

    render() {
      const butter = Butter(process.env.BUTTER_CMS_API_KEY);

      return <App {...this.props} butter={butter} />;
    }
  };
