import ApiService from '@/services/ApiService.js'

export const namespaced = true

export const state = {
  interval: 5000,
  metrics: []
}

export const mutations = {
  ADD_METRIC (state, { metricName, metricInfo }) {
    state.metrics.push({ name: metricName, infos: metricInfo })
  }
}

export const actions = {
  fetchMetric ({ commit, dispatch, state }, metricName) {
    return ApiService.getMetricInfo(metricName)
      .then(response => {
        commit('ADD_METRIC', { metricName: metricName, metricInfo: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }
}
export const getters = {
  metrics () {
    return state.metrics
  }
}
