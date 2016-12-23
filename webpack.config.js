const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/src/client/scripts/app.js'),
  output: {
    filename: './dist/build/bundle.js',
    path: path.join(__dirname, '/dist/build'),
    publicPath: '/',
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
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6'],
  },
};
