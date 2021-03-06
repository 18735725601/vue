//store对象
import Vue from 'vue'
import Vuex from 'vuex'
import shop from './modules/shop'



import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)

//向外暴露store对象
export default new Vuex.Store({
  modules:{
    shop
  },
  state,
  mutations,
  actions,
  getters
})