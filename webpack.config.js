const webpack = require('webpack');
const { VueLoaderPlugin } = require( 'vue-loader' );

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/public/js',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test:/\.vue$/, loader: 'vue-loader' },
      { test: /\.css$/, loader: 'style-loader', loader: 'css-loader' },
      { test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/, loader: 'file-loader' }
    ]
  },
  resolve: {
    alias: {
     vue$: 'vue/dist/vue.esm.js'
    }
  },
  plugins:[
    new VueLoaderPlugin()
  ]
};