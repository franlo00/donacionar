import Vue from 'nativescript-vue';
import Vuex from 'vuex'

import sideDrawer from './modules/sideDrawer'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    sideDrawer
  },
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
});