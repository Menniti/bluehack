import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from 'components/login'
import EssentialLinks from 'components/EssentialLinks'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Login
  }, {
    path: '/essential',
    name: 'essential',
    component: EssentialLinks
  }
]

export default new VueRouter({ routes })
