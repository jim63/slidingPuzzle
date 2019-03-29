const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: ["babel-loader"]
      // },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["env", "react", "es2015"],
          plugins: ["transform-class-properties"]
        }
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  }
};
