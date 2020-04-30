import ApiService from '@/services/ApiService.js'

export const namespaced = true

export const state = {
  configprops: []
}

export const mutations = {
  SET_CONFIGPROPS (state, configprops) {
    state.configprops = configprops
  }
}

export const actions = {
  fetchConfigProps ({ commit, dispatch, state }) {
    return ApiService.getConfigprops()
      .then(response => {
        commit('SET_CONFIGPROPS', response.data.contexts.application.beans)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
export const getters = {
}
