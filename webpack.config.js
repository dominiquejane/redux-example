module.exports = {
  entry: {
    main: "./client/app/index.js"
  },
  output: {
    filename: "bundle.js",
    path: "./client"
  },
  devtool: "sourcemap",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel"
      }
    ]
  }
  
}