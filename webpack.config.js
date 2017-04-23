const { join } = require('path');
const webpack = require('webpack');

const PATHS = {
  app: './src/index.js',
  html: './src/index.html',
  dist: join(__dirname, 'dist'),
};

module.exports = {
  entry: {
    javascript: PATHS.app,
    html: PATHS.html,
  },

  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: 'bundle.js',
  },

  devServer: {
    contentBase: PATHS.dist,
    hot: true,
    port: 5659,
  },

  resolve: {
    extensions: ['.js', '.jsx', ''],
  },

  devtool: 'cheap-module-eval-source-map',

  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['eslint-loader'],
      },
    ],

    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader?importLoaders=1', 'postcss-loader'],
      },
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]',
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
