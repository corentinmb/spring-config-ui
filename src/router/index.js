import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Settings from '../views/Settings.vue'
import Configs from '../views/Configs.vue'
import Metrics from '../views/Metrics.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/configs',
    name: 'Configs',
    component: Configs
  },
  {
    path: '/metrics',
    name: 'Metrics',
    component: Metrics
  }
]

const router = new VueRouter({
  routes
})

export default router
