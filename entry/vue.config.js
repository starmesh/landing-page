const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  devServer: {
    port: 8081
  },
  productionSourceMap: false,
  pwa: {
    name: 'StarMesh EO meta-vehicle',
    msTileColor: '#1a1a1a',
    themeColor: '#1a1a1a',
  },
  publicPath: '/',
  configureWebpack: {
    plugins: [
      new CopyPlugin([
        { from: 'root', to: '.', ignore: ['.*'] }
      ]),
    ]
  }
}