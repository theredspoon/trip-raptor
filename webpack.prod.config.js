const path = require('path');
const webpack = require('webpack');
const DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/client/scripts/app.js'),
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
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
    ],
  },
  plugins: [
    // server-side injection
    new DotenvPlugin({
      sample: path.join(__dirname, '/.env.example'),
      path: path.join(__dirname, '/.env'),
    }),
    // client-side injection
    new webpack.EnvironmentPlugin([
      'GOOGLE_MAPS_API',
    ]),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6'],
  },
};
