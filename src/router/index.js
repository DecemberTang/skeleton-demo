import Vue from 'vue'
import Router from 'vue-router'

import home from '../pages/home.vue'
import search from '../pages/search.vue'
import index from '../pages/index.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      name: 'search',
      path: '/search',
      component: search
    }
  ]
})

export default router
