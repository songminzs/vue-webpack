const path = require('path')

module.exports = {
  dev: {
    baseUrl: '',
    publicPath: '/',
    assetsSubDirectory: 'static',
    devtool: 'cheap-module-eval-source-map',
    port: 8080,
    notifyOnError: true,
    sourceMap: true,
    // 支持mock和proxy的url列表，代理的时候需要使用 *.jd.com 的域名（host）进行访问，才能获取cookie
    mockList: [
      {
        path: '/api',
        target: 'http://example.com'
      }
    ]
  },
  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    baseUrl: '',
    // 静态资源路径，yf是预发的意思，可以自行配置CDN路径
    publicPath: process.env.BUILD_TYPE !== 'yf' ? './' : './',
    assetsSubDirectory: 'static',
    devtool: 'cheap-module-source-map',
    // 预发开启静态资源sourceMap，线上环境关闭
    sourceMap: process.env.BUILD_TYPE === 'yf',
    productionGzip: process.env.BUILD_TYPE !== 'yf',
    bundleAnalyzerReport: process.env.ANALYZE
  }
}
