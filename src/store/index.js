import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) { }

const state = {
  city: defaultCity
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
