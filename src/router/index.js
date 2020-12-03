import Vue from 'vue'
import VueRouter from 'vue-router'
import Resources from '../views/Resources.vue'
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
    component: Resources
  },
  {
    path: '/category/:main/:sub',
    name: 'subPage',
    component: Resources
  },
  {
    path: '/search/:search',
    name: 'searchPage',
    component: Resources
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
