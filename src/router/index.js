import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Layout = r => require.ensure([], () => r(require('../views/layout/index'), 'layout'))

export const routerMap = [
  {
    path: '/',
    component: Layout
  }
]

export default new Router({
  // mode: 'history', // require service support
  // base:'/',
  routes: routerMap
})
