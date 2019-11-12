const webpack = require('webpack');
const path = require('path');

module.exports = {

  // mode: 'development',
  mode: 'production',

  entry: {
    build: './index.js'
  },

  output: {
    path: path.resolve(__dirname, './'),
    filename: 'dev/build.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(png|jpg|gif|ttf|otf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        ]
      }
    ]
  },

  performance: {
    hints: false
  }

};
