const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('./../webpack.config.js');

const express = require('express');
const app = express();
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { publicPath: webpackConfig.output.publicPath, stats: { colors: true }, quiet: true }));
app.use(webpackHotMiddleware(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000, // eslint-disable-line no-console
}));

app.get('/', (req, res) => {
  res.sendfile('./index.html');
});

app.listen(7777, () => {
  console.log('Static express listening at http://localhost:7777'); // eslint-disable-line no-console
});


