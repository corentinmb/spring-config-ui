import ApiService from '@/services/ApiService.js'

export const namespaced = true

export const state = {
  status: '',
  diskspace: {}
}

export const mutations = {
  UPDATE_INFOS (state, { status, diskspace }) {
    state.status = status
    state.diskspace = diskspace
  }
}

export const actions = {
  fetchServerInfo ({ commit, dispatch, state }) {
    return ApiService.getServerInfo()
      .then(response => {
        commit('UPDATE_INFOS', { status: response.data.status, diskspace: response.data.components.diskSpace.details })
      })
      .catch(error => {
        commit('UPDATE_INFOS', { status: 'DOWN', diskspace: 0 })
        console.log(error)
      })
  }
}

export const getters = {
  usedSpacePercentage () {
    return Math.round(100 - state.diskspace.free / state.diskspace.total * 100)
  }
}
