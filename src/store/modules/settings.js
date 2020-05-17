export const namespaced = true

export const state = {
  baseUrl: 'http://localhost:8080/actuator',
  language: 'English',
  refreshInterval: 1
}

export const mutations = {
  SET_BASEURL (state, baseUrl) {
    state.baseUrl = baseUrl
  },
  SET_REFRESH_INTERVAL (state, refreshInterval) {
    state.refreshInterval = refreshInterval
  },
  SET_LANGUAGE (state, language) {
    state.language = language
  }
}

export const actions = {
}
export const getters = {
}
