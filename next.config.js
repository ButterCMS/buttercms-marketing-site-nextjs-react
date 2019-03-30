const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const webpack = require("webpack");

require("dotenv").config();

module.exports = withImages(
  withCSS({
    webpack: config => {
      config.plugins.push(new webpack.EnvironmentPlugin(process.env));
      return config;
    }
  })
);
