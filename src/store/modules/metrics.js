import ApiService from '@/services/ApiService.js'

export const namespaced = true

export const state = {
  jvmUsed: 0
}

export const mutations = {
  SET_JVMUSED (state, jvmUsed) {
    state.jvmUsed = jvmUsed
  }
}

export const actions = {
  fetchMetrics ({ commit, dispatch, state }) {
    return ApiService.getMetricInfo('jvm.memory.used')
      .then(response => {
        commit('SET_JVMUSED', response.data.measurements[0].value)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
export const getters = {
}
