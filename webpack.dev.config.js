const path = require('path');
const webpack = require('webpack');
const cssnext = require('postcss-cssnext');
const DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = {
  entry: [
    'bootstrap-loader',
    path.resolve(__dirname, 'src/client/scripts/app.jsx')],
  output: {
    path: path.resolve(__dirname, 'dist/build'), // webpack-dev-server needs content-base to serve from 'dist/'
    publicPath: '/build/', // 'webpack result is being served from [publicPath]'
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env'],
        },
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader', // ?sourceMap',
          'css-loader?modules&importLoaders=4&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'postcss-loader',
          'resolve-url-loader',
          'sass-loader?sourceMap',
          'sass-resources-loader?sourceMap',
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        ],
      },
      { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000' },
      { test: /\.(ttf|eot)$/, loader: 'file-loader' },
      /* eslint-disable no-useless-escape */ // configured for Windows compatibility
      { test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports-loader?jQuery=jquery' },
    ],
  },
  plugins: [
    // server-side config var injection
    new DotenvPlugin({
      sample: path.join(__dirname, '/.env.example'),
      path: path.join(__dirname, '/.env'),
    }),
    // client-side config var injection
    new webpack.EnvironmentPlugin([
      'GOOGLE_MAPS_API',
    ]),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6'],
  },
  postcss: [cssnext],
  sassResources: path.resolve(__dirname, 'config/sass-resources.scss'),
};
