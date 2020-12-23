module.exports = {
  devServer: {
    proxy: {
      '/': {
        // target: 'process.env.VUE_APP_BASEURL',
        target: 'http://192.168.0.7:8080/',
        // target: 'http://192.168.106.29:8080/',
        secure: false, // 如果是https接口 需要配置这个参数
        ws: true, // 是否代理websockets
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
