import { CHANGE_TAB } from './type'
const state = {
  tabIndex: 0
}
const mutations = {
  [CHANGE_TAB](state, index) {
    state.tabIndex = index
  }
}
export default {
  state,
  mutations,
}
