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
    contentBase: srcDir,
    port: 1337
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    preLoaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        test: /\.html$/,
        loader: 'file?name=[path][name].[ext]'
      }
    ]
  }
}
