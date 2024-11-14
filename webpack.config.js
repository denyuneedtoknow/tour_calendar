const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    calendar: "./src/js/calendar.js", // Calendar page entry
    details: "./src/js/details.js", // Details page entry
  },
  output: {
    filename: "js/[name].bundle.js", // Output JS files
    path: path.resolve(__dirname, "dist"), // Output directory
    clean: true, // Clean the dist folder before each build
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"], // Process SCSS
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Process JavaScript
        },
      },
    ],
  },
  plugins: [
    // Generate the Calendar Page (Entry Page)
    new HtmlWebpackPlugin({
      filename: "index.html", // Calendar page becomes the entry point
      template: "./src/pages/calendar.html", // Template for the calendar page
      chunks: ["calendar"], // Include only the calendar JS
    }),
    // Generate the Details Page
    new HtmlWebpackPlugin({
      filename: "details.html", // Details page
      template: "./src/pages/details.html", // Template for the details page
      chunks: ["details"], // Include only the details JS
    }),
    // Copy static assets from public folder
    new CopyWebpackPlugin({
      patterns: [
        { from: "public", to: "" }, // Copy all files from `public/` to `dist/`
      ],
    }),
  ],
  devServer: {
    static: "./dist", // Serve the dist folder
    port: 3000,
    hot: true, // Enable hot reloading
  },
  mode: "development", // Development mode
};
