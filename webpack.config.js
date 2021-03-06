module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },

  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 3000
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
