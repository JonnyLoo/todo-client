const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: [
    './client/index.js'
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './web',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  output: {
    path: path.resolve(__dirname, 'web'),
    publicPath: '/',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [{
      test: /(\.jsx|\.js)$/,
      include: path.join(__dirname, 'client'),
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/env',
            '@babel/react'
          ]
        }
      }
    },
    {
      test: /(\.css|\.scss)$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            includePaths: [path.resolve(__dirname, 'node_modules')]
          }
        }
      ]
    }]
  }
};
