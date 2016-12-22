module.exports = {
  entry: './src/client/scripts/app.js',
  output: {
    filename: './dist/build/bundle.js',
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6'],
  },
};
