const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: {
    server: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'server.bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: path.resolve(__dirname, 'node_modules/'),
      loader: 'babel-loader',
      query: {
        presets: ['@babel/preset-env']
      }
    }]
  },
  mode: 'development',
  target: 'node',
  watch: true,
  externals: [nodeExternals()]
}