import Vue from 'vue'
import VueRouter from 'vue-router'

import paths from './paths'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  routes: [...paths],

  scrollBehavior(to, from, savedPosition) {
    let position: any = {}
    if (to.hash) {
      position.offset = { y: 0 }
      position.selector = to.hash

      return position
    }
    
    return { x: 0, y: 0 }
  }
})

export default router
