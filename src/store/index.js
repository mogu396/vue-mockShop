import Vue from 'vue'
import Vuex from 'vuex'
import category from './category'
import detail from './detail'
import shopCart from './shopCart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    category,
    detail,
    shopCart
  }
})
