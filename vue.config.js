module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/win-doctorstation/'
    : '/',
  // chainWebpack: (config) => {
  //   const oneOfsMap = config.module.rule('scss').oneOfs.store
  //   oneOfsMap.forEach((item) => {
  //     item
  //       .use('sass-resources-loader')
  //       .loader('sass-resources-loader')
  //       .options({
  //         resources: [
  //           './src/assets/styles/index.scss'
  //         ]
  //       })
  //       .end()
  //   })
  // },
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        components: 'components',
        public: 'public'
      }
    }
  },
  devServer: {
    port: '1010',
    open: true,
    proxy: {
      '/api': {
        target: 'http://172.16.0.150:20020',
        changeOrigin: true
      }
    }
  }
}
