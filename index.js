var fs = require('fs')
var webpack = require('webpack')

var config = {
  context: __dirname,
  entry: './input.js',
  output: {
    path: './output',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.svg'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          { loader: 'file-loader' }
        ]
      }
    ]
  }
}

webpack(config, function (err) {
  if(err){
    console.error(err)
  }
  else{
    console.log('ok')
  }
})