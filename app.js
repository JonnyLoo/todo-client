const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const PORT = 3000;
const router = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// hot reloading in dev env
// can add production settings here too ie. optimization for bundling, etc
// if (NODE_ENV = prod) use webpack.config.prod.js or something like that
if (process.env.NODE_ENV === 'dev') {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.dev.js');
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

// resolve static file paths
app.use(express.static(path.join(__dirname, 'web')));
app.use(express.static(path.join(__dirname, 'views')));

// serve html template
app.get('/', (req, res) => {
  res.send('index.html');
});

// setup client side urls
app.use('/api/item', router);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
