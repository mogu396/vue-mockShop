module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 配置别名
        'assets': '@/assets',
        'common': '@/common',
        'plugins': '@/plugins',
        'views': '@/views',
        'components': '@/components',
      }
    },
    // devServer:{
    //   // devServer发送请求前，到before指定的函数进行处理，如果before没有对应的接口路由
    //   // 才会请求外网
    //   before:require('./mock/mock')
    // }
  },
}
