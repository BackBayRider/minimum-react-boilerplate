var path = require('path');
var webpack = require('webpack');
var staticPath = './public';

var config = {
  entry: {
    app: [
      path.join(__dirname, './src/app.js'),
    ],

    vendor: [
      'react', 'react-dom',
    ],
  },

  node: { fs: 'empty' },

  output: {
    filename: '[name].js',
    publicPath: '/public/',
    path: path.join(__dirname, staticPath),
  },
  module: {

    loaders: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        publicPath: 'http://localhost:7777/',
      }],
  },

  devtool: true ? 'source-map' : 'eval-cheap-module-source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.optimize.DedupePlugin(),
  ],
};

config.entry.vendor.splice(0, 0,
  'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'
);
config.plugins.splice(0, 0,
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
);


module.exports = config;
