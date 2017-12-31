const path = require("path");


module.exports =
{
  context: path.resolve(__dirname, "./Scripts/src"),
  debug : true,
  devtool: 'inline-soruce-map',
  noInfo: false,
  entry : [
    path.resolve(__dirname, 'src/index')
  ],
  target : 'web',
  output : {
    path : path.resolve(__dirname,'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins:[],
  module : {
    loaders:[
    { test : /\.js$/,exclude: /node_moduels/, loaders: ['babel']},
    { test: /\.css$/, loaders : ['style','css']}
    ]
  }
};
