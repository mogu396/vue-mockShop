import Toast from './Toast'

const obj={

}

// 安装插件，vue会进到插件里面执行install函数
obj.install=function(Vue){
  // 注册一个组件构造函数
  const toastConstractor=Vue.extend(Toast)

  const toast =new toastConstractor()

  // 将new出来的toast挂载到一个元素上
  toast.$mount(document.createElement('div'))

  // toast.$el获取的是上面createElement的内容
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast=toast
}

export default obj