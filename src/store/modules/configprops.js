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
        console.log(Object.keys(response.data.configprops.contexts['application-1'].beans).length)
        commit('SET_CONFIGPROPS', response.data.configprops.contexts['application-1'].beans)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
export const getters = {
}
