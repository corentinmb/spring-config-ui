import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
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
    path: '/about',
    name: 'About',
    component: About
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
