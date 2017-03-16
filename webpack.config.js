const path = require('path')
const rootDir = path.resolve('./')
const distDir = path.join(rootDir, '/dist')
const srcDir = path.join(rootDir, '/src')

module.exports = {
  context: srcDir,
  entry: {
    javascript: './index.tsx'
  },
  output: {
    path: distDir,
    filename: 'bundle.js'
  },
  devServer: {
    port: 1337
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[path][name].[ext]'
      }
    ]
  }
}
