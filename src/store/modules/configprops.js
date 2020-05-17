import ApiService from '@/services/ApiService.js'

export const namespaced = true

export const state = {
  configprops: []
}

export const mutations = {
  SET_CONFIGPROPS (state, configprops) {
    state.configprops = configprops
  },
  DELETE_ALL_CONFIGPROPS (state) {
    state.configprops = []
  }
}

export const actions = {
  fetchConfigProps ({ commit, dispatch, state }) {
    return ApiService.getConfigprops()
      .then(response => {
        commit('SET_CONFIGPROPS', response.data.contexts.application.beans)
      })
      .catch(error => {
        commit('DELETE_ALL_CONFIGPROPS')
        console.log(error)
      })
  }
}
export const getters = {
}
