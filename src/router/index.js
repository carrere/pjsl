import Vue from 'vue'
import VueRouter from 'vue-router'
import Tools from '../views/Tools.vue'
import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  },
  {
    path: '/category/:main',
    name: 'catPage',
    component: Tools
  },
  {
    path: '/category/:main/:sub',
    name: 'subPage',
    component: Tools
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }
  
]

const router = new VueRouter(
  {
    linkActiveClass: 'is-active',
    routes
  })

export default router
