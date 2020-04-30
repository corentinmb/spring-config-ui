import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/actuator',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  getConfigprops () {
    return apiClient.get('/configprops')
  },
  getEnv () {
    return apiClient.get('/env')
  },
  getMetricInfo (metric) {
    return apiClient.get('/metrics/' + metric)
  }
}
