const CopyPlugin = require('copy-webpack-plugin');
const prettydata = require('pretty-data');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
// const { Paths } = require('../src/router/paths').default.map(r => r.path).filter(p => !p.match(/\*/))
// console.log(Paths)

const prettyPrint = xml => {
  const result = prettydata.pd.xml(xml);
  return result;
};

const routerPaths = [
  '/why-blockchain',
  '/team',
  '/',
  '/why-dao',
  '/marketplace',
  '/technical-stack'
];

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
      // copy netlify directives
      new CopyPlugin([
        { from: 'root', to: '.', ignore: ['.*'] }
      ]),
      // sitemap Generator
      new SitemapPlugin('https://starmesh.xyz', routerPaths, {
        fileName: 'sitemap.xml',
        lastMod: true,
        changeFreq: 'monthly',
        formatter: prettyPrint,
      }),
    ]
  }
}