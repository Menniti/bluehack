import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from 'components/login'
import Doctor from 'components/doctor'
import Patient from 'components/patient'
import Messages from 'components/message'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Login
  }, {
    path: '/doctors',
    name: 'doctors',
    component: Doctor
  }, {
    path: '/patients',
    name: 'patients',
    component: Patient
  }, {
    path: '/messages',
    name: 'messages',
    component: Messages
  }
]

export default new VueRouter({ routes })
