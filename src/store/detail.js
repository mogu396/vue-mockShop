import {
  SAVE_DETAIL_INFO,
  CHANGE_COLOR_INDEX,
  CHANGE_SIZE_INDEX
 } from './type'
const state = {
  detailInfo: {},//商品详情页数据
  colorSelected: 0,//颜色选择下标
  sizeSelected: 0 //内存容量选择下标
}

const mutations = {
  // 保存详情页所有数据
  [SAVE_DETAIL_INFO](state, data) {
    state.detailInfo = data
  },
  [CHANGE_COLOR_INDEX](state, index) {
    state.colorSelected = index
  },
  [CHANGE_SIZE_INDEX](state,index){
    state.sizeSelected=index
  }
}



export default {
  state,
  mutations,
}
