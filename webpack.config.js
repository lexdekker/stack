// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development', // development mode
  entry: './index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'), // output folder
    publicPath: '/', // needed for dev server
    clean: true // clean the output folder before each build
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public') // serve static files
    },
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
    hot: true, // enable Hot Module Replacement
    open: true, // opens browser automatically
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // JS and JSX files
        exclude: /node_modules/,
        use: 'babel-loader' // uses .babelrc for config
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] // allows imports without extensions
  },
  optimization: {
    runtimeChunk: 'single' // optional, helps with caching
  }
};
