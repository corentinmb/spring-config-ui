import axios from 'axios'
import store from '@/store'

const apiClient = axios.create({
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

apiClient.interceptors.request.use(
  config => {
    console.log(store.state.settings.baseUrl)
    config.baseURL = store.state.settings.baseUrl
    return config
  }, error => Promise.reject(error))

export default {
  getConfigprops () {
    return apiClient.get('/configprops')
  },
  getEnv () {
    return apiClient.get('/env')
  },
  getMetricInfo (metric) {
    return apiClient.get('/metrics/' + metric)
  },
  getServerInfo () {
    return apiClient.get('/health')
  }
}
