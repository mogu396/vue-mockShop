import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'plugins/vant/vant.js'
import toast from './components/common/toast'


Vue.config.productionTip = false

// Vue去执行Toast对应的index
Vue.use(toast)

console.log(process.env);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
