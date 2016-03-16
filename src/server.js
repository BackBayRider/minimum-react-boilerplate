var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var webpack = require('webpack');
var webpackConfig = require('./../webpack.config.js');

var express = require('express');
var app = express();
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { publicPath: webpackConfig.output.publicPath, stats: { colors: true } }));
app.use(webpackHotMiddleware(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

app.get('/', function (req, res) {
  res.sendfile('./index.html');
});

var server = app.listen(7777, function () {
  console.log('Static express listening at http://localhost:7777');
});


