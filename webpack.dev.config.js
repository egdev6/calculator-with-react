const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: [ path.resolve(__dirname, './src/index.js'), path.resolve(__dirname, './src/style.scss') ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      //Aqui van los loaders
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options:{
            presets:['es2015', 'es2016', 'react', 'stage-2']
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          use:["css-loader", "sass-loader"]
        })
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    //Aqui van los plugins
    new ExtractTextPlugin("css/style.css"),
  ]
}