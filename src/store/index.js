import Vue from 'vue'
import Vuex from 'vuex'

import * as configprops from '@/store/modules/configprops.js'
import * as metrics from '@/store/modules/metrics.js'
import * as settings from '@/store/modules/settings.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    configprops,
    metrics,
    settings
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})

export default store
