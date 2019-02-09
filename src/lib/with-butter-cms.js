import React, { Component } from "react";
import Butter from "buttercms";

const ButterCMSContext = React.createContext();
const butter = Butter(process.env.BUTTER_CMS_API_KEY);

class DataProvider extends Component {
  state = {
    loading: true,
    heroData: {},
    clientsData: {},
    featuresData: {}
  };

  async componentDidMount() {
    this.setState({
      loading: true
    });

    try {
      const response = await Promise.all([
        butter.page.retrieve("*", "hero"),
        butter.page.retrieve("*", "clients"),
        butter.page.retrieve("*", "features")
      ]);

      this.setState({
        heroData: response[0].data.data,
        clientsData: response[1].data.data,
        featuresData: response[2].data.data,
        loading: false
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <ButterCMSContext.Provider
        value={{
          loading: this.state.loading,
          heroData: this.state.heroData,
          clientsData: this.state.clientsData,
          featuresData: this.state.featuresData
        }}
      >
        {this.props.children}
      </ButterCMSContext.Provider>
    );
  }
}

const DataConsumer = ButterCMSContext.Consumer;

export { DataConsumer };
export default DataProvider;