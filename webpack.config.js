var webpack = require('webpack');

var config = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV === 'test'
    })
  ],

  module: {
    loaders: [
      { test: /\.js$/, 
        loader: 'babel', 
        exclude: /node_modules/, 
        query: {
          presets: ['es2015']
        }
      },
      {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
      {test: /\.styl$/, loader: 'style!css!stylus', exclude: /node_modules/}
    ]
  }
};

if (process.env.NODE_ENV === 'production') {
  config.output.path = __dirname + '/dist';
}

module.exports = config;
