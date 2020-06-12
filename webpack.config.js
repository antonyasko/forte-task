const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(css|scss|sass)$/,
        exclude: /\.module\.(css|scss|sass)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          { loader: 'sass-loader' }
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(['dist']),
  ],
};
