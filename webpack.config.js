const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

  mode: 'development',
  // mode: 'production',

  entry: {
    app: './index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].chunk.js'
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
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      path: path.resolve(__dirname, 'dev'),
      filename: 'css/[name].bundle.css',
      chunkFilename: 'css/[name].chunk.css'
    }),
  ],

  performance: {
    hints: false
  }

};
