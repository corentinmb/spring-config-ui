import Vue from 'vue'
import Vuex from 'vuex'

import * as configprops from '@/store/modules/configprops.js'
import * as metrics from '@/store/modules/metrics.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    configprops,
    metrics
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
