import ApiService from '@/services/ApiService.js'

export const namespaced = true

export const state = {
  interval: 5000,
  metrics: new Map()
}

export const mutations = {
  ADD_METRIC (state, { metricName, metricInfo }) {
    state.metrics.set(metricName, { name: metricName, infos: metricInfo })
  },
  DELETE_ALL_METRICS (state) {
    state.metrics = new Map()
  }
}

export const actions = {
  fetchMetric ({ commit, dispatch, state }, metricName) {
    return ApiService.getMetricInfo(metricName)
      .then(response => {
        commit('ADD_METRIC', { metricName: metricName, metricInfo: response.data })
      })
      .catch(error => {
        commit('DELETE_ALL_METRICS')
        console.log(error)
      })
  }
}
export const getters = {
  metrics () {
    return state.metrics
  }
}
