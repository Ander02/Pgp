import Vue from 'vue'
import Vuex from 'vuex'
import dataArea from '@/data/area.json';

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    areas: dataArea.Area
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
