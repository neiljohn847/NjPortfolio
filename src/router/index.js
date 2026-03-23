import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '../views/HomeView.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = new Router({
  mode: 'hash',
  routes: routes
})

export default router