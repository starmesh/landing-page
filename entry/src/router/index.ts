import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import paths from './paths'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  routes: [...paths],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
