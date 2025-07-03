const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    calendar: "./src/js/calendar.js", // France Tour Calendar page entry
    details: "./src/js/details.js", // France Tour Details page entry
    tours: "./src/js/tours.js", // Tours history page entry
    europeCalendar: "./src/js/europe-calendar.js", // Europe Tour Calendar page entry
    europeDetails: "./src/js/europe-details.js", // Europe Tour Details page entry
    franceCalendar: "./src/js/france-calendar.js", // France Tour Calendar page entry
    franceDetails: "./src/js/france-details.js", // France Tour Details page entry
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
    // Generate the France Tour Calendar Page (Main Entry Page)
    new HtmlWebpackPlugin({
      filename: "index.html", // France Tour Calendar page becomes the entry point
      template: "./src/pages/calendar.html", // Template for the calendar page
      chunks: ["calendar"], // Include only the calendar JS
    }),
    // Generate the France Tour Details Page
    new HtmlWebpackPlugin({
      filename: "details.html", // France Tour Details page
      template: "./src/pages/details.html", // Template for the details page
      chunks: ["details"], // Include only the details JS
    }),
    // Generate the Tours History Page
    new HtmlWebpackPlugin({
      filename: "tours.html", // Tours history page
      template: "./src/pages/tours.html", // Template for the tours page
      chunks: ["tours"], // Include only the tours JS
    }),
    // Generate the Europe Tour Calendar Page
    new HtmlWebpackPlugin({
      filename: "europe-2024.html", // Europe Tour Calendar page
      template: "./src/pages/europe-2024.html", // Template for the Europe calendar page
      chunks: ["europeCalendar"], // Include only the Europe calendar JS
    }),
    // Generate the France Tour Calendar Page (Alternative)
    new HtmlWebpackPlugin({
      filename: "france-calendar.html", // France Tour Calendar page
      template: "./src/pages/france-calendar.html", // Template for the France calendar page
      chunks: ["franceCalendar"], // Include only the France calendar JS
    }),
    // Generate the France Tour Details Page (Alternative)
    new HtmlWebpackPlugin({
      filename: "france-details.html", // France Tour Details page
      template: "./src/pages/france-details.html", // Template for the France details page
      chunks: ["franceDetails"], // Include only the France details JS
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
